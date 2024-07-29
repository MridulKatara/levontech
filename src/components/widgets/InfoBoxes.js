//InfoBoxes
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlagIcon from '@mui/icons-material/Flag';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import './styles/InfoBoxes.css';

const InfoBoxes = () => {
  return (
    <Grid container spacing={2} className="info-boxes">
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <BarChartIcon className="info-icon" />
          <Typography variant="h6">Earnings</Typography>
          <Typography variant="body1">$350.4</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <AttachMoneyIcon className="info-icon" />
          <Typography variant="h6">Spend This Month</Typography>
          <Typography variant="body1">$682.5</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <TrendingUpIcon className="info-icon" />
          <Typography variant="h6">Sales</Typography>
          <Typography variant="body1">$574.34</Typography>
          <Typography variant="body2">+23% since last month</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <FlagIcon className="info-icon" />
          <Typography variant="h6">Your Balance</Typography>
          <Typography variant="body1">$1000</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <AssignmentIcon className="info-icon" />
          <Typography variant="h6">New Task</Typography>
          <Typography variant="body1">154</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box className="info-box">
          <DescriptionIcon className="info-icon" />
          <Typography variant="h6">Total Projects</Typography>
          <Typography variant="body1">2935</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default InfoBoxes;
