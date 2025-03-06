import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  GitHub,
  LinkedIn,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        py: 1,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around", // Align text & icons in one line
            alignItems: "center", // Keep everything centered
            flexWrap: "wrap", // Prevent overflow on small screens
            gap: 2,
          }}
        >
          {/* Copyright Text */}
          <Typography variant="body2">
            © {new Date().getFullYear()} Abolade-GOS. All rights reserved.
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="mailto:boladealli27@gmail.com"
              sx={{ color: "#fff" }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/gos27"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://x.com/GOS027"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://github.com/gos27"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/gos27/"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
