import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const services = [
  { id: 1, name: 'Waste Management', description: 'Efficient waste collection and recycling services.' },
  { id: 2, name: 'Public Transport', description: 'Reliable and affordable public transportation.' },
  { id: 3, name: 'Healthcare', description: 'Access to quality healthcare services.' },
  { id: 4, name: 'Education', description: 'Educational institutions and resources.' },
  { id: 5, name: 'Water Supply', description: 'Safe and continuous water supply.' },
  { id: 6, name: 'Electricity', description: 'Uninterrupted electricity services.' },
  { id: 7, name: 'Safety and Security', description: 'Enhanced public safety measures.' },
  { id: 8, name: 'Public Parks', description: 'Well-maintained public parks' },
  { id: 9, name: 'Road Maintenance', description: 'Regular road repairs & maintenance services.' },
];

const Services = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>City Services</Typography>
        <Grid container spacing={3}>
          {services.map(service => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Paper
                elevation={3}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.2)', // Adding a shadow on hover for emphasis
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>{service.name}</Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
