import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const data = [
  { id: 1, type: 'Air Quality', value: 'Good', details: 'AQI: 45' },
  { id: 2, type: 'Water Quality', value: 'Excellent', details: 'pH: 7.2' },
  { id: 3, type: 'Traffic', value: 'Moderate', details: '25 min delay on Main St.' },
  { id: 4, type: 'Energy Usage', value: 'High', details: '12% above average' },
  { id: 5, type: 'Noise Levels', value: 'Moderate', details: '70 dB near downtown' },
  { id: 6, type: 'Public Transport Usage', value: 'High', details: 'Buses at 85% capacity' },
  { id: 7, type: 'Weather', value: 'Sunny', details: '28°C with clear skies' },
  { id: 8, type: 'Crime Rate', value: 'Low', details: '2 incidents reported today' },
  { id: 9, type: 'Emergency Services Response Time', value: 'Quick', details: 'Average response time: 5 minutes' },
];

const Data = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Real-time Data</Typography>
        <Grid container spacing={3}>
          {data.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>{item.type}</Typography>
                <Typography variant="body1">Status: {item.value}</Typography>
                <Typography variant="body2">{item.details}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Data;
