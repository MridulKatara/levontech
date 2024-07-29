//BarChart
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import './styles/BarChart.css';

const BarChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/barChartData');
      const result = await response.json();
      const { weekly } = result.barChartData;

      const labels = weekly.map(item => item.label);
      const values = weekly.map(item => item.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Weekly Revenue',
            data: values,
            backgroundColor: ['#c2cbe2', '#61b6e3', '#523ee4'],
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <Box className="bar-chart-container">
      <Box className="bar-chart-header">
        <Typography variant="h6" className="bar-chart-title">
          Weekly Revenue
        </Typography>
        <IconButton>
          <BarChartIcon />
        </IconButton>
      </Box>
      <Bar data={data} options={{ responsive: true }} />
    </Box>
  );
};

export default BarChart;
