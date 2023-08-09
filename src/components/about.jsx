import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import './AboutStyles.css'; 
import Grid from '@mui/material/Grid';
import '../index.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4), 
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 20,
  height: 380,
  borderRadius: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(5px)',
  transition: 'transform 0.3s, opacity 0.3s', // Add transition for opacity
}));

const About = ({ id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardContents = [
    {
      title: 'Our Coffee',
      content: 'Experience the rich flavors and aromas of our carefully sourced coffee beans.',
    },
    {
      title: 'What We Do',
      content: 'We travel around the UK serving the tastiest coffee in the most beautiful places. Come and find us by following our calendar or hire us for a private event!',
    },
    {
      title: 'Our Story',
      content: 'Learn about our journey and commitment to delivering the finest coffee since 2023.',
    },
  ];

  return (
    <section
      id={id}
      className="about"
      style={{
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundColor: 'rgba(10, 15, 10, 1)',
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          position: 'relative',
          p: { xs: 10 },
          mb: { xs: 5 },
          height: '75vh',
        }}
      >
        {cardContents.map((card, index) => (
          <Grid item xs={4} key={index}>
            <Item
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: 'rgba(138, 122, 102, 0.85)',
                transform:
                  hoveredIndex === index
                    ? 'scale(1.1)'
                    : hoveredIndex !== null
                    ? 'scale(0.95)'
                    : 'scale(1)',
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 5 },
                  textDecoration: hoveredIndex === index ? 'underline' : 'none',
                  color: hoveredIndex === index ? 'orange' : 'inherit',
                }}
              >
                {card.title}
              </Typography>
              <Typography variant="body1">{card.content}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default About;
