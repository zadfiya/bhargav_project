import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const TrackRecordBoxSection = (props) => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* Embedded Video */}
            {/* Replace the URL with your actual video URL */}
            <iframe
              width="97%"
              height="250"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Interview with CEO"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Description */}
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tortor vel turpis hendrerit, 
              in ultrices lectus sodales. Vivamus nec quam at arcu scelerisque elementum eu sit amet metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tortor vel turpis hendrerit, 
              in ultrices lectus sodales. Vivamus nec quam at arcu scelerisque elementum eu sit amet metus.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TrackRecordBoxSection;
