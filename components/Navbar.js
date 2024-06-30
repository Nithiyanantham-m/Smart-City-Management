import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#004d40' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smart City Management
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/services">City Services</Button>
        <Button color="inherit" component={Link} to="/data">Real-time Data</Button>
        <Button color="inherit" component={Link} to="/report">Report Issue</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
