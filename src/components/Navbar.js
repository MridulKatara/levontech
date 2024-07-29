import React from 'react';
import { Box, Typography, IconButton, InputBase, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from './context/ThemeContext';
import './styles/Navbar.css';

const Navbar = () => {
  const { theme, toggleColorMode } = useTheme();

  return (
    <Box className="navbar">
      <Typography variant="h6" className="navbar-title">Main Dashboard</Typography>
      <Box className="navbar-icons">
        <Box className="search-box">
          <InputBase placeholder="Search…" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={toggleColorMode}>
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton>
          <InfoIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;