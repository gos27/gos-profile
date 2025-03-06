import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Box,
  Typography,
} from "@mui/material";
import User from "./User";

const GithubFinder = () => {
  const [userName, setUserName] = useState("gos27");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithub = async () => {
    if (!userName.trim()) {
      setError("Please enter a valid username");
      return;
    }
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error("User not found!");
      }

      const data = await response.json();
      setUserData(data);
      setUserName("");
      // console.log(data);
    } catch (e) {
      setUserData(null);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchGithub();
  };

  useEffect(() => {
    fetchGithub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        padding: 3,
        border: "2px solid black",
        my: 2,
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        GithubFinder
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          label="Search Username"
          id="uname"
          name="uname"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault(); // Prevents form submission if inside a form
              handleSubmit(); // Call search function on Enter key
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={loading} // Disables instead of hiding
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Search"} {/* Show loading text */}
        </Button>
      </Box>
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {userData && <User user={userData} />}
    </Container>
  );
};

export default GithubFinder;
