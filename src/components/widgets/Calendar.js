//CalendarWidget
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Calendar from 'react-calendar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-calendar/dist/Calendar.css';
import './styles/Calendar.css';

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Box className="calendar-container">
      <Box className="calendar-header">
        <Typography variant="h6">Calendar</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Calendar onChange={onChange} value={date} />
    </Box>
  );
};

export default CalendarWidget;
