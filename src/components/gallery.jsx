import React from 'react';
import { Container, Paper, Grid, Typography } from '@mui/material';
import './GalleryStyles.css'; // Import your custom styles

const galleryData = [
    {
      imageUrl: '/images/gallery1.jpg', // Update image URL
      title: 'Coffee Delights',
      description: 'Indulge in the rich flavors of our handcrafted coffees.',
    },
    {
      imageUrl: '/images/gallery2.jpg', // Update image URL
      title: 'Cozy Atmosphere',
      description: 'Experience the warmth and comfort of our coffee shop.',
    },
    // Add more gallery items as needed
  ];

const Gallery = () => {
  return (
    <section className="gallery">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {galleryData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} className="gallery-item">
                <div className="image-container">
                  <img src={item.imageUrl} alt={`Gallery Item ${index}`} />
                </div>
                <div className="text-container">
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Gallery;
