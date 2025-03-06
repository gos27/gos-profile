import React, { useRef } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
// import { Fab } from "@mui/material";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToSection = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Scroll To Section
      </Typography>

      {/* Buttons to scroll to sections */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => scrollTo(section1Ref)}
        >
          Go to Section 1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mx: 2 }}
          onClick={() => scrollTo(section2Ref)}
        >
          Go to Section 2
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => scrollTo(section3Ref)}
        >
          Go to Section 3
        </Button>
      </Box>

      {/* Sections */}
      <Box
        ref={section1Ref}
        sx={{
          height: "100vh",
          bgcolor: "#FFCDD2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Section 1</Typography>
      </Box>

      <Box
        ref={section2Ref}
        sx={{
          height: "100vh",
          bgcolor: "#C8E6C9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Section 2</Typography>
      </Box>

      <Box
        ref={section3Ref}
        sx={{
          height: "100vh",
          bgcolor: "#BBDEFB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Section 3</Typography>
      </Box>

      {/* Scroll to Top Button */}
      {/* <Fab
        color="primary"
        size="small"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardArrowUpIcon />
      </Fab> */}
    </Container>
  );
};

export default ScrollToSection;
