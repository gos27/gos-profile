import React, { useEffect, useState } from "react";
import {
  TextField,
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Suggestions = ({ data, handleClick }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Paper style={{ position: "absolute", zIndex: 1, width: "100%" }}>
      <List>
        {data.map((item, index) => (
          <ListItem button key={index} onClick={() => handleClick(item)}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    setSelectedUser(null);

    if (query.length >= 1) {
      const filteredData = users.filter((user) =>
        user.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropdown(filteredData.length > 0);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  };

  const handleClick = (user) => {
    setSearchParam(user);
    setSelectedUser(user);
    setFilteredUsers([]);
    setShowDropdown(false);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data?.users?.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
      } else {
        setUsers([]);
      }
      setError(null);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        border: 2,
        margin: 2,
        minHeight: "200px",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        AutoSearch{" "}
      </Typography>

      <div
        className="container"
        style={{
          width: "300px",
          margin: "auto",
          paddingTop: "20px",
          position: "relative",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h1 style={{ color: "red" }}>{error}</h1>
        ) : (
          <>
            <TextField
              value={searchParam}
              onChange={handleChange}
              label="Search users"
              variant="outlined"
              fullWidth
            />
            {showDropdown && (
              <Suggestions handleClick={handleClick} data={filteredUsers} />
            )}
            {!showDropdown &&
              searchParam.length > 1 &&
              filteredUsers.length === 0 &&
              !selectedUser && (
                <p style={{ color: "gray" }}>
                  No users found for "{searchParam}"
                </p>
              )}
            {selectedUser && (
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                Selected User: {selectedUser}
              </Typography>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default Search;
