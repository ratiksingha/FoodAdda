import React from 'react';
import {
  Container,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Box,
  Paper,
} from '@mui/material';

class ContactCBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render method called');

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
            <TextField label="Name" name="name" required fullWidth />
            <TextField label="Email" name="email" type="email" required fullWidth />
            <TextField
              label="Message"
              name="message"
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
            No of Queries: {this.state.count}
          </Typography>
        </Paper>
      </Container>
    );
  }
}

export default ContactCBC;
