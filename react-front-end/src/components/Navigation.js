import React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../styles/Navigation.scss';

export default function Navigation(props) {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  return (
    <div className="sidebar">
      <div className="sidebar-icon">

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <div className="menu_icon">
        <MenuIcon />
        </div>
      </IconButton>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <div className="sidebar-drawer">
        <h3 className="username">Logged in as User</h3>
        {/* Divider Line */}
        <Divider />
        <List>
          <ListItem component={Link} to="/">
          <div className='nav-item'>
            <ListItemText primary="Home" />
          </div>
          </ListItem>
          <ListItem component={Link} to="/about">
          <div className='nav-item'>
            <ListItemText primary="About" />
            </div>
          </ListItem>
          <ListItem component={Link} to="/create">
          <div className='nav-item'>
            <ListItemText primary="Create Category" />
            </div>
          </ListItem>
          <ListItem component={Link} to="/edit">
          <div className='nav-item'>
            <ListItemText primary="Edit Category" />
            </div>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem component={Link} to="/contactinfo">
          <div className='nav-item'>
            <ListItemText primary="Contact Info" />
            </div>
          </ListItem>
          <ListItem component={Link} to="/login">
          <div className='nav-item'>
            <ListItemText primary="Login" />
            </div>
          </ListItem>
          <ListItem component={Link} to="/signup">
            <div className='nav-item'>
              <ListItemText primary="Sign Up" />
            </div>
          </ListItem>
    
          {/* Filling Empty Space Below Nav Bar Items */}
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem component={Link} to="/logout">
          <div className='nav-item'>
            <ListItemText primary="Logout" />
            </div>
          </ListItem>
        </List>
      </div>
      </Drawer>
    </div>
  );
}
