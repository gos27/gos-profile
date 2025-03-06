import { useState, useEffect } from "react";
import { LinearProgress, Box, Container, Typography } from "@mui/material";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      {/* Scroll Indicator */}
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 5,
          backgroundColor: "#ddd",
          zIndex: 1000,
        }}
      />

      {/* Content */}
      <Container sx={{ mt: 5, p: 3, textAlign: "center" }}>
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          Scroll Indicator Example
        </Typography>
        <Typography variant="body1">
          Scroll down to see the progress bar in action.
        </Typography>

        {/* Dummy Content */}
        <Box sx={{ height: "100vh", mt: 3, bgcolor: "#f5f5f5", p: 2 }}>
          <Typography variant="h6">Keep Scrolling...</Typography>
        </Box>
      </Container>
    </>
  );
};

export default ScrollIndicator;
