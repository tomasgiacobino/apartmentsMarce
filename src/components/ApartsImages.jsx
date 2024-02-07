import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ApartsImages = ({ images }) => {
  return (
    <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=248&fit=crop&auto=format`}
              alt={`Apart image ${index}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ApartsImages;