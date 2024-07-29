import React from 'react';
import { Container, Grid } from '@mui/material';
import ThemeContextProvider from './components/context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import InfoBoxes from './components/widgets/InfoBoxes';
import LineChart from './components/widgets/LineChart';
import BarChart from './components/widgets/BarChart';
import CheckTable from './components/widgets/CheckTable';
import DailyTraffic from './components/widgets/DailyTraffic';
import PieChart from './components/widgets/PieChart';
import ComplexTable from './components/widgets/ComplexTable';
import TaskList from './components/widgets/TaskList';
import CalendarWidget from './components/widgets/Calendar';
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <div data-theme="light">
        <Sidebar />
        <Container style={{ marginLeft: '250px', padding: '20px' }}>
          <Navbar />
          <InfoBoxes />
          <Grid container spacing={2} className="chart-grid">
            <Grid item xs={12} md={6}>
              <LineChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <BarChart />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="chart-grid">
            <Grid item xs={12} md={4}>
              <CheckTable />
            </Grid>
            <Grid item xs={12} md={4}>
              <DailyTraffic />
            </Grid>
            <Grid item xs={12} md={4}>
              <PieChart />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="chart-grid">
            <Grid item xs={12} md={4}>
              <ComplexTable />
            </Grid>
            <Grid item xs={12} md={4}>
              <TaskList />
            </Grid>
            <Grid item xs={12} md={4}>
              <CalendarWidget />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeContextProvider>
  );
}

export default App;