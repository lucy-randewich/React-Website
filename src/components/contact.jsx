import React from 'react';
import { Paper, Typography, Link, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../index.css'

const styles = {
  contactContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '50px 0', 
    color: '#fff', 
    textAlign: 'center',
  },
  socialIcons: {
    marginTop: '20px',
    fontSize: '24px',
    '& > *': {
      margin: '0 30px', 
    },
  },
  copyright: {
    marginTop: '20px',
    fontSize: '14px',
  },
};

const Contact = () => {
  return (
    <div style={{backgroundColor: 'rgba(10, 15, 10, 1)'}}>
      <Container style={styles.contactContainer}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography variant="body1">
          Have questions or want to connect? Reach out to us on social media!
        </Typography>
        <div style={styles.socialIcons}>
          <Link href="#" color="inherit">
            <FacebookIcon />
          </Link>
          <Link href="#" color="inherit">
            <TwitterIcon />
          </Link>
          <Link href="#" color="inherit">
            <InstagramIcon />
          </Link>
        </div>
        <Typography variant="body2" style={styles.copyright}>
          &copy; {new Date().getFullYear()} Rover Roasts. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Contact;
