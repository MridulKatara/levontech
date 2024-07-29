//PieChart
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import './styles/PieChart.css';

const PieChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/pieChartData');
      const result = await response.json();
      const { monthly } = result.pieChartData;

      const labels = monthly.map(item => item.label);
      const values = monthly.map(item => item.value);

      setData({
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <Box className="pie-chart-container">
      <Box className="pie-chart-header">
        <Typography variant="h6">Your Pie Chart</Typography>
        <Typography>Monthly</Typography>
      </Box>
      <Pie data={data} options={{ responsive: true }} />
      <Box className="pie-chart-info">
        <Box className="info-box">
          <span className="info-color-dot" style={{ backgroundColor: '#FF6384' }}></span>
          <Typography>Your Files</Typography>
          <Typography>63%</Typography>
        </Box>
        <Box className="info-box">
          <span className="info-color-dot" style={{ backgroundColor: '#36A2EB' }}></span>
          <Typography>System</Typography>
          <Typography>25%</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PieChart;
