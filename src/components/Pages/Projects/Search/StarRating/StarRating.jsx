import React, { useState } from "react";
import { Container, Typography, Rating, Box } from "@mui/material";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        border: 2,
        margin: 2,
        minHeight: "150px",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Star Rating
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Rating
          name="star-rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          max={noOfStars}
          precision={1}
          size="large"
        />
        <Box mt={1} fontSize={18} fontWeight="bold">
          {rating > 0
            ? `You rated: ${rating} out of ${noOfStars}`
            : "Rate this"}
        </Box>
      </Box>
    </Container>
  );
};

export default StarRating;
