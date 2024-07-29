import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-h1">HORIZON FREE</h1>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="NFT Marketplace" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TableChartIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ViewKanbanIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;