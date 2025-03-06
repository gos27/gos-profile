import React, { useState, useEffect } from "react";
import {
  Container,
  CircularProgress,
  Box,
  Fab,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ScrollToTopAndBottom = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
        <h2>Loading data... Please wait.</h2>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: "center", mt: 5, color: "red" }}>
        <h2>Error: {error}</h2>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Scroll to Top & Bottom
      </Typography>

      <Box
        sx={{
          maxHeight: "60vh",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: 2,
          bgcolor: "#f9f9f9",
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{ padding: 2, borderBottom: "1px solid #ccc" }}
          >
            <strong>{item.title}</strong>
          </Box>
        ))}
      </Box>

      {/* Floating Action Buttons for Quick Scroll */}
      <Fab
        color="primary"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          top: 50,
          right: 20,
          zIndex: 1000, // Ensure it stays above other elements
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>

      <Fab
        color="primary"
        onClick={scrollToBottom}
        sx={{
          position: "fixed",
          bottom: 50,
          right: 20,
          zIndex: 1000, // Ensure it stays above other elements
        }}
      >
        <KeyboardArrowDownIcon />
      </Fab>
    </Container>
  );
};

export default ScrollToTopAndBottom;
