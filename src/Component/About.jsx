import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Link,
  Box,
  CircularProgress,
} from '@mui/material';

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchGithubData();
  }, []);

  async function fetchGithubData() {
    try {
      const response = await axios.get('https://api.github.com/users/Cager2808');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  }

  if (!userData) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  const { name, bio, location, avatar_url, html_url } = userData;

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ maxWidth: 400, p: 2, boxShadow: 6, borderRadius: 4 }}>
        <Box display="flex" justifyContent="center">
          <Avatar
            src={avatar_url}
            alt={name}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            {name}
          </Typography>
          <Typography component="ul" variant="body1" align="center" color="text.secondary">
            <li>{bio}</li>
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            📍 {location}
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <Link href={html_url} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" color="primary">
                Visit GitHub Profile
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
