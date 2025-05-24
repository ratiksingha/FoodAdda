import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

class ContactCBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      count: 0,
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
    // setTimeout(() => {
    //   this.setState({ count: 1 });
    // }, 1000);
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      name: '',
      email: '',
      message: '',
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('Render method called');
    const { name, email, message, count } = this.state;

    return (
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            If you have any questions, feel free to reach out!
          </Typography>
          <Box
            component="form"
            onSubmit={this.handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}
          >
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              required
              fullWidth
            />
            <TextField
              label="Message"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            No of Queries: {count}
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default ContactCBC;