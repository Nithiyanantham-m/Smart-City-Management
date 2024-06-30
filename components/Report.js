import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const Report = () => {
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/issues', { issue });
      setMessage('Issue reported successfully!');
      setIssue('');
    } catch (error) {
      setMessage('Error reporting issue');
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Report an Issue</Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Describe the issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              multiline
              rows={4}
            />
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
          {message && (
            <Box mt={2}>
              <Typography variant="body1">{message}</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Report;
