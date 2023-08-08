import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import './AboutStyles.css'; // Import your custom styles
import Grid from '@mui/material/Grid';
import '../index.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2), // Increase padding for more space within the cards
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 20,
  height: 380,
  borderRadius: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(5px)',
  transition: 'transform 0.3s', // Add a smooth transition effect
}));

const About = ({ id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id={ id } className="about" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'rgba(10, 15, 10, 1)'}}>
      {/* Added padding to the top and bottom of the section */}
      <Grid
        container
        justifyContent="center"
        spacing={3} // Adjust spacing between cards
        sx={{
          position: 'relative',
          p: { xs: 10 },
          mb: { xs: 5 }, // Added margin-bottom to add space below cards
          height: '75vh',
        }}
      >
        {[0, 1, 2].map((index) => (
          <Grid item xs={4} key={index}>
            <Item
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)', // Grow on mouse over
              }}
            >
              <Typography variant="h5">Card Title</Typography>
              <Typography variant="body1">
                Card content goes here.
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default About;
