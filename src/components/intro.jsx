import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Image from '../images/backdrop.jpeg';
import '../index.css'

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
    padding: '20px',
    borderRadius: '10px',
    marginTop: '80px',
    marginBottom: '40px', 
  },
  description: {
    marginTop: '50px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  hireButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    padding: '10px 20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};

const Intro = () => {
  return (
    <Paper style={styles.paperContainer}>
      <div style={styles.textContainer}>
        <Typography variant="h2">Rover Roasts</Typography>
        <div style={styles.description}>
          <Typography variant="body1">
            Serving the finest coffee from the back of a Defender
          </Typography>
          <Typography variant="body1">
            Experience the unique blend of mobility and coffee craftsmanship
          </Typography>
          <Typography variant="body1">
            From private events to nationwide journeys, join us on our caffeinated adventure
          </Typography>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <Button style={styles.hireButton}>Hire Us Now</Button>
      </div>
    </Paper>
  );
}

export default Intro;
