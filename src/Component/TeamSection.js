import React from 'react';
import { Container, Typography, Box, Avatar, IconButton } from '@mui/material';
import { LinkedIn, PropaneSharp } from '@mui/icons-material';

const SimpleSection = (props) => {
  return (
    <Container>

      <Box
        sx={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          marginBottom:"18px"
        }}
      >
        {/* Left Side */}
        <Box sx={{ width: '18%', paddingLeft: '9%', marginRight: '16px' }}>
          <Avatar
            sx={{ width: '100px', height: '100px', marginBottom: '8px', backgroundColor: 'skyblue' }}
            alt="Avatar"
          >
            {props.name.charAt(0)}
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {props.name}
          </Typography>
         
        </Box>

        {/* Right Side */}
        <Box sx={{ width: '70%' }}>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tortor vel turpis hendrerit,
            in ultrices lectus sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tortor vel turpis hendrerit,
            in ultrices lectus sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tortor vel turpis hendrerit,
            in ultrices lectus sodales.
          </Typography>
          {/* Margin */}
          <Box sx={{ margin: '16px 0' }} />
          <IconButton sx={{ width: '40px', height: '40px', backgroundColor: 'white' }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default SimpleSection;
