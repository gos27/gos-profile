import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";
import Logo from "../images/hero.jpeg";

const Home = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "background.default", color: "text.primary", p: 3 }}
    >
      {/* Dark Mode Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Hero Content */}
        <Box
          sx={{ position: "relative", color: "white", maxWidth: "800px", p: 3 }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Welcome to Abolade-GOS
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Your one-stop solution for innovative web experiences.
          </Typography>
          <Button
            variant="contained"
            color="#fff"
            size="large"
            component={Link}
            to="/about"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          Our Key Features
        </Typography>
        <Grid container spacing={6}>
          {" "}
          {/* Increased spacing for better separation */}
          {[
            {
              title: "🚀 Fast & Responsive",
              description:
                "Lightning-fast performance with seamless responsiveness across all devices.",
            },
            {
              title: "🎨 Modern UI/UX",
              description:
                "Intuitive, visually appealing, and user-friendly interfaces for an enhanced experience.",
            },
            {
              title: "🔒 Secure & Reliable",
              description:
                "Industry-standard security measures ensuring data protection and reliability.",
            },
            {
              title: "🏆 Exceptional App Design",
              description:
                "Crafting unique, high-quality applications tailored to your needs.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* 4 columns on desktop */}
              <Box
                sx={{
                  minHeight: "250px", // Ensure all boxes have a minimum height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "background.paper",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 2,
          mt: 3,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Get Started Today
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join us and take your project to the next level...
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
