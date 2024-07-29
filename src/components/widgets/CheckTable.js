//CheckTable
import React, { useState, useEffect } from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles/CheckTable.css';

const CheckTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/checkTableData');
      const result = await response.json();
      setData(result.tableData); 
    };

    fetchData();
  }, []);

  return (
    <Box className="check-table-container">
      <Box className="check-table-header">
        <Typography variant="h6">Check Table</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>PROGRESS</TableCell>
            <TableCell>QUANTITY</TableCell>
            <TableCell>DATE</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CheckTable;
