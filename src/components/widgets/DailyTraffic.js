//DailyTraffic
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import './styles/DailyTraffic.css';

const DailyTraffic = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/barChartData');
      const result = await response.json();
      const { daily } = result.barChartData;

      const labels = daily.map(item => item.label);
      const values = daily.map(item => item.value);

      setData({
        labels,
        datasets: [
          {
            label: 'Daily Traffic',
            data: values,
            backgroundColor: '#523ee4',
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <Box className="daily-traffic-container">
      <Box className="daily-traffic-header">
        <Typography variant="h6">Daily Traffic</Typography>
        <Typography className="traffic-growth">
          +2.45% <span className="traffic-arrow">&#x2191;</span>
        </Typography>
      </Box>
      <Typography variant="h4" className="traffic-visitors">
        2,579 Visitors
      </Typography>
      <Bar data={data} options={{ responsive: true }} />
    </Box>
  );
};

export default DailyTraffic;
