import React, { useState, useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import Image from '../images/backdrop.jpeg';
import Logo from '../images/whitelogo.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../index.css';


const Intro = ({ id }) => {

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

  const styles = {
    paperContainer: {
      minHeight: '100vh',
      position: 'relative',
      background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
        url(${Image}) center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
    logoContainer: {
      textAlign: 'center',
      borderRadius: '10px',
      marginTop: '110px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      opacity: scrolled ? '0.3' : '1',
      transition: 'opacity 0.8s',
    },
    logoImage: {
      width: '60%',
      marginBottom: '10px',
      opacity: scrolled ? '0.3' : '0.7',
      transition: 'opacity 0.8s',
    },
  };

  return (
    <section id={id}>
      
        <Paper style={styles.paperContainer}>

        <ParallaxProvider scrollAxis='vertical'>
        <Parallax translateY={[-15, 15]}>
          <div style={styles.logoContainer}>
            <img
              src={Logo}
              alt="Coffee Co Logo"
              style={styles.logoImage}
            />
          </div>
          <div style={styles.buttonContainer}>
            <Button
              variant="contained"
              sx={{
                ":hover": {
                  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                  border: '2px solid rgba(255, 255, 255, 0.95)',
                  backgroundColor: 'rgba(240, 152, 46, 0.6)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  transform: 'scale(1.07)',
                },
                backgroundColor: 'transparent',
                color: 'rgba(255, 255, 255, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.6)',
                borderRadius: '4px',
                padding: '10px 20px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Hire Us Now
            </Button>
          </div>
          </Parallax>
          </ParallaxProvider>
        </Paper>
      
    </section>
  );
};

export default Intro;
