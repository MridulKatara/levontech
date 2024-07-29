import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles/TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      const response = await fetch('/path/to/api');
      const result = await response.json();
      setTasks(result.taskListData); // Assuming the API response has a taskListData field
    };

    fetchData();
  }, []);

  return (
    <Box className="task-list-container">
      <Box className="task-list-header">
        <Checkbox />
        <Typography variant="h6">TASKS</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Checkbox />
            <ListItemText primary={task} />
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;