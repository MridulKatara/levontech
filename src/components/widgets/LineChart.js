import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './styles/LineChart.css';

const LineChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/lineChartData');
      const result = await response.json();
      const { monthly } = result.lineChartData;

      const labels = monthly.map(item => item.label);
      const values = monthly.map(item => item.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Monthly Data',
            data: values,
            borderColor: '#61b6e3',
            backgroundColor: 'rgba(97, 182, 227, 0.2)',
            fill: true,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <Box className="line-chart-container">
      <Box className="line-chart-header">
        <Typography variant="h6" className="line-chart-title">
          <CalendarTodayIcon /> <span>Monthly Line Chart</span>
        </Typography>
        <IconButton>
          <BarChartIcon />
        </IconButton>
      </Box>
      <Box className="line-chart-info">
        <Typography variant="h4">$37.5K</Typography>
        <Typography variant="body1" className="green-text">
          Total Spent <span className="green-arrow">&#x2191; +2.45%</span>
        </Typography>
        <CheckCircleIcon className="green-check" />
        <Typography variant="body1">On track</Typography>
      </Box>
      <Line data={data} />
    </Box>
  );
};

export default LineChart;
