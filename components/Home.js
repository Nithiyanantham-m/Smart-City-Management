import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f7fa',
        minHeight: '100vh',
        pt: 5,
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            color: '#004d40',
            mb: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome to Smart City Management System
          </Typography>
          <Typography variant="h5">
            Enhancing urban living through efficient resource management, improved public safety, and enhanced citizen engagement.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                color: 'text.secondary',
                height: '100%', // Set a fixed height to maintain equal size
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <img
                src={require('./smartcity.jpg')}
                alt="Smart City"
                style={{ width: '100%', height: 'auto', flex: '1 1 auto' }}
              />
              <Typography variant="h6" gutterBottom>
                Resource Management
              </Typography>
              <Typography variant="body1">
                Efficiently manage city resources like water, electricity, and waste.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                color: 'text.secondary',
                height: '100%', // Set a fixed height to maintain equal size
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <img
                src={require('./publicsafety.jpg')}
                alt="Public Safety"
                style={{ width: '100%', height: 'auto', flex: '1 1 auto' }}
              />
              <Typography variant="h6" gutterBottom>
                Public Safety
              </Typography>
              <Typography variant="body1">
                Improve public safety with advanced monitoring and quick response systems.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                color: 'text.secondary',
                height: '100%', // Set a fixed height to maintain equal size
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <img
                src={require('./citizen.jpg')}
                alt="Citizen Engagement"
                style={{ width: '100%', height: 'auto', flex: '1 1 auto' }}
              />
              <Typography variant="h6" gutterBottom>
                Citizen Engagement
              </Typography>
              <Typography variant="body1">
                Enhance citizen engagement through interactive platforms and services.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
