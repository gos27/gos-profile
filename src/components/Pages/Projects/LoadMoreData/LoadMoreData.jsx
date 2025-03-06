import { useEffect, useState, useCallback } from "react";
import {
  Button,
  Container,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); // Stores loaded products
  const [count, setCount] = useState(0); // Track loads (0 = first 20 items)
  const [error, setError] = useState(null);

  const disableButton = products.length >= 100; // Disable after 100 products

  const fetchProducts = useCallback(
    async (skip, initialLoad = false) => {
      if (products.length >= 100) return; // Prevent unnecessary API calls

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${skip}`
        );
        const result = await response.json();

        if (result?.products?.length) {
          setProducts((prevData) =>
            initialLoad ? result.products : [...prevData, ...result.products]
          );
        } else {
          setError("No more products available.");
        }
      } catch (e) {
        setError("Failed to load products. Please try again...");
      } finally {
        setLoading(false);
      }
    },
    [products.length]
  );

  // Load only 20 items on mount
  useEffect(() => {
    fetchProducts(0, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependency on `fetchProducts` to avoid extra calls

  const handleLoadMore = () => {
    const nextSkip = (count + 1) * 20;
    setCount((prev) => prev + 1);
    fetchProducts(nextSkip);
  };

  return (
    <Container
      sx={{
        background: "#f5f5f5",
        padding: 3,
        borderRadius: 3,
        boxShadow: 3,
        my: 2,
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Load More Data
      </Typography>

      <div style={{ textAlign: "center", padding: "2rem" }}>
        {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={3} justifyContent="center">
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ bgcolor: "background.paper", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.thumbnail || "https://via.placeholder.com/150"}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div style={{ marginTop: "2rem" }}>
          {!disableButton ? (
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={handleLoadMore}
            >
              {loading ? <CircularProgress size={24} /> : "Load More Products"}
            </Button>
          ) : (
            <Button variant="contained" color="secondary" disabled>
              You have reached 100 products
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LoadMoreData;
