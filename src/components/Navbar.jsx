import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          YouTube Clone
        </Typography>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <SearchBar />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;