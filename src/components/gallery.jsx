import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Coffee from '../images/coffee.jpeg';

const galleryData = [
  {
    imageUrl: Coffee,
    title: 'Coffee Delights',
    description: 'Indulge in the rich flavors of our handcrafted coffees',
  },
  {
    imageUrl: Coffee,
    title: 'Cozy Atmosphere',
    description: 'Experience the warmth and comfort of our coffee shop',
  },
];

const Gallery = () => {
  const galleryContainerStyle = {
    backgroundColor: 'rgba(138, 122, 102, 0.8)',
    display: 'flex',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    height: '75vh',
  };

  const paperStyle = {
    backgroundColor: 'rgba(138, 122, 102, 0.8)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    height: '50vh', 
    width: '50vw', // Set width to auto so image retains its aspect ratio
  };

  return (
    <section className="gallery">
      <div style={galleryContainerStyle}>
        {galleryData.map((item, index) => (
          <Paper style={paperStyle} key={index}>
            <img src={item.imageUrl} style={imageStyle} alt={`Gallery Item ${index}`} />
            <div>
              <Typography variant="h6" sx={{color: 'white', width:'50vw', maxWidth: '50vw', textAlign:'center'}} >{item.title}</Typography>
              <Typography variant="body1" sx={{color: 'white', width:'50vw', maxWidth: '50vw', textAlign:'center'}} >{item.description}</Typography>
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
