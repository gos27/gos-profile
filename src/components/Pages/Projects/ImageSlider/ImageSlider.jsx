import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  CircularProgress,
  Typography,
  Pagination,
  Fade,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl, page, limit) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setImages(data);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(url, page, limit);
  }, [url, page, limit]);

  function handlePrevious() {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "auto" }} />;

  if (errorMsg)
    return (
      <Typography textAlign="center" color="error">
        Error: {errorMsg}
      </Typography>
    );

  return (
    <Container
      sx={{
        background: "background.paper",
        padding: 3,
        borderRadius: 3,
        boxShadow: 3,
        my: 2,
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Image Slider
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            height: { xs: 250, sm: 350, md: 400 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "#ddd",
          }}
        >
          {images.length > 0 && (
            <Fade in timeout={500}>
              <img
                src={images[currentSlide].download_url}
                alt={images[currentSlide].alt_description || "Image"}
                title={images[currentSlide].id}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Fade>
          )}

          {/* Left Arrow Button */}
          <Button
            onClick={handlePrevious}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "primary",
              "&:hover": { bgcolor: "rgba(23, 26, 196, 0.88)" },
            }}
          >
            <ArrowBack />
          </Button>

          {/* Right Arrow Button */}
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "primary",
              "&:hover": { bgcolor: "rgba(23, 26, 196, 0.88)" },
            }}
          >
            <ArrowForward />
          </Button>
        </Box>

        {/* Pagination Indicators */}
        {images.length > 1 && (
          <Pagination
            count={images.length}
            page={currentSlide + 1}
            onChange={(_, value) => setCurrentSlide(value - 1)}
            color="primary"
          />
        )}
      </Box>
    </Container>
  );
}

export default ImageSlider;
