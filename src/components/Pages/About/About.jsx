import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";

const About = () => {
  const { toggleColorMode } = useColorMode();

  const teamMembers = [
    {
      name: "Dolapo Alli",
      role: "CEO & Founder",
      image: "/images/dolapo.jpeg", 
    },
    {
      name: "Bolade Ayodeji",
      role: "Lead Developer",
      image: "/images/bolade.jpg", 
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Dark Mode Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          backgroundColor: "primary.main",
          color: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          About Us
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          We are a team dedicated to delivering top-notch solutions.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          🎯 Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}
        >
          Our goal is to provide high-quality services that make a difference.
          We believe in innovation, integrity, and customer satisfaction.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          🚀 Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  mx: "auto",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          my: 6,
          textAlign: "center",
          py: 4,
          backgroundColor: "secondary.light",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Join Us on Our Journey
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Want to work with us? Let's build something amazing together.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          href="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default About;
