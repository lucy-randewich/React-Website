import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../index.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(2px)',
        transition: 'background-color 0.4s',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rover Roasts
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/about">About Us</Button>
        <Button color="inherit" href="/menu">Book</Button>
        <Button color="inherit" href="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
