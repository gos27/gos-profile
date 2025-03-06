import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Link,
  Box,
  Container,
} from "@mui/material";

const User = ({ user }) => {
  const formattedDate = new Date(user.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Container>
      <Card
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 3,
          textAlign: "center",
          p: 2,
          boxShadow: 3,
        }}
      >
        {" "}
        <Avatar
          src={user.avatar_url || "https://via.placeholder.com/100"}
          alt={user.login ? `${user.login}'s avatar` : "Default Avatar"}
          sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {user.name || "Name not Provided"}
          </Typography>
          <Typography variant="body2" color="text.secondary>">
            @{user.login}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              <strong>Company: </strong>
              {user.company}
            </Typography>
            <Typography variant="body1">
              <strong>Bio: </strong>
              {user.bio || "Not provided"}
            </Typography>
            <Typography variant="body1">
              <strong>Location: </strong>
              {user.location || "Not provided"}
            </Typography>
            <Typography variant="body1">
              <strong>Twitter:</strong>
              {""}
              {user.twitter_username ? (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                >
                  @{user.twitter_username}
                </Link>
              ) : (
                "Not provided"
              )}
            </Typography>
            <Typography variant="body1">
              <strong>ID: </strong>
              {user.id}
            </Typography>
            <Typography variant="body1">
              <strong>Joined: </strong>
              {formattedDate}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            href={user.html_url}
            target="_blank"
          >
            View Github Profile
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default User;
