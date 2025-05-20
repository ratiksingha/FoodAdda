import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const devloperName = "Ratik Singh";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 2, // reduced padding
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
       
          {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="GitHub"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="Twitter"
              size="small"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box> */}
          <Typography variant="caption" color="inherit" sx={{ mt: 1 }}>
            &copy; {new Date().getFullYear()} {devloperName}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;