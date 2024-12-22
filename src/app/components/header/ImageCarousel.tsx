"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid2 from '@mui/material/Grid2';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{xs:12}} height={800}>
          <Card sx={{margin:2,height:800}}>
            <CardMedia
              component="img"
              height={400}
              image={images[currentIndex]}
              alt="green iguana"
            />
            <CardContent>
            <IconButton onClick={handlePrevClick}>
            <ArrowBackIcon className='text-black text-left' />
          </IconButton>
          <IconButton onClick={handleNextClick}>
            <ArrowForwardIcon className='text-black text-right'  />
          </IconButton>
              <Typography gutterBottom variant="h5" component="div">
                Image Carousel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a simple image carousel built with Material-UI.
              </Typography>
              
            </CardContent>
          </Card>
        </Grid2>
        </Grid2>
    </Box>
  );
};

export default ImageCarousel;