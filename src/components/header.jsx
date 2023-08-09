import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../index.css';

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        height: scrolled ? '70px' : '80px', 
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(2px)',
        transition: 'background-color 0.4s, height 0.4s',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '24px' }}>
          Rover Roasts
        </Typography>
        <div>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'orange',
              },
            }}
            onClick={() => scrollToSection('intro')}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'orange',
              },
            }}
            onClick={() => scrollToSection('about')}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'orange',
              },
            }}
            onClick={() => scrollToSection('book')}
          >
            Book
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'orange',
              },
            }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
