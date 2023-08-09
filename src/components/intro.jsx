import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Image from '../images/backdrop.jpeg';
import Logo from '../images/whitelogo.png';
import '../index.css';

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
  textContainer: {
    textAlign: 'center',
    borderRadius: '10px',
    marginTop: '110px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logoImage: {
    width: '60%',
    marginBottom: '10px',
    opacity: '0.7',
  },
};

const Intro = ({ id }) => {
  return (
    <section id={id}>
      <Paper style={styles.paperContainer}>
        <div style={styles.textContainer}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                color: '#000',
                transform: 'scale(1.05)',
              },
              backgroundColor: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: '4px',
              padding: '10px 20px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            Hire Us Now
          </Button>
        </div>
      </Paper>
    </section>
  );
};

export default Intro;
