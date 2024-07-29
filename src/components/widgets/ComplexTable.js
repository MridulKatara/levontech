import React, { useState, useEffect } from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Typography, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';
import ErrorIcon from '@mui/icons-material/Error';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles/ComplexTable.css'; // Ensure you have this CSS file

const statusIcons = {
  approved: <CheckCircleIcon style={{ color: 'green' }} />,
  disabled: <BlockIcon style={{ color: 'red' }} />,
  error: <ErrorIcon style={{ color: 'yellow' }} />
};

const ComplexTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      const response = await fetch('/path/to/api');
      const result = await response.json();
      setData(result.complexTableData); // Assuming the API response has a complexTableData field
    };

    fetchData();
  }, []);

  return (
    <Box className="complex-table-container">
      <Typography variant="h6" gutterBottom>
        Complex Table
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{statusIcons[item.status] || 'Unknown'}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ComplexTable;
