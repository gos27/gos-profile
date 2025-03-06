import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import randomColor from "randomcolor";

// Function to approximate color name
const getClosestColorName = (hex) => {
  const colors = {
    Red: "#FF0000",
    Green: "#008000",
    Blue: "#0000FF",
    Yellow: "#FFFF00",
    Cyan: "#00FFFF",
    Magenta: "#FF00FF",
    Black: "#000000",
    White: "#FFFFFF",
    Gray: "#808080",
    Orange: "#FFA500",
    Pink: "#FFC0CB",
    Purple: "#800080",
    Brown: "#A52A2A",
    Lime: "#00FF00",
  };

  let closestColor = "Unknown";
  let closestDistance = Infinity;

  Object.entries(colors).forEach(([name, colorHex]) => {
    const distance = Math.abs(
      parseInt(hex.substring(1), 16) - parseInt(colorHex.substring(1), 16)
    );
    if (distance < closestDistance) {
      closestDistance = distance;
      closestColor = name;
    }
  });

  return closestColor;
};

const GenerateRandomColor = () => {
  const [color, setColor] = useState("#ffffff");

  const handleGenerateColor = () => {
    const newColor = randomColor(); // Generate random hex color
    setColor(newColor);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        bgcolor: color,
        minHeight: 200,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s ease-in-out",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Random Color Generator
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        HEX: {color}
      </Typography>

      <Typography variant="h6">
        RGB: {parseInt(color.slice(1, 3), 16)},{" "}
        {parseInt(color.slice(3, 5), 16)}, {parseInt(color.slice(5, 7), 16)}
      </Typography>

      <Typography variant="h6">
        Color Name: {getClosestColorName(color)}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleGenerateColor}
      >
        Generate Random Color
      </Button>
    </Box>
  );
};

export default GenerateRandomColor;
