import React, { createContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

// Create the Context
export const GreetContext = createContext();

const Footer = () => {
  const devloperName = "Ratik Singh";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Connect with us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <IconButton
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} {devloperName}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
