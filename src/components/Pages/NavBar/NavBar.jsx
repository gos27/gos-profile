import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import RocketIcon from "@mui/icons-material/Rocket";
import { ChevronRightOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const navItems = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/account", label: "Account" },
  { link: "/contact", label: "Contact" },
];

const StyledNavButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  "&.active": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Abolade-GOS";
      case "/about":
        return "About";
      case "/projects":
        return "Projects";
      case "/account":
        return "Account";
      case "/contact":
        return "Contact";
      default:
        return null;
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: drawerWidth,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ padding: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List sx={{ bgcolor: "#fff" }}>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.link}
              onClick={handleDrawerToggle}
              sx={(theme) => ({
                "&.active": {
                  backgroundColor: theme.palette.primary.light,
                  fontWeight: "bold",
                  "&:hover": {
                    background: "rgba(0,0,0,0.5)",
                  },
                },
              })}
            >
              <ListItemText primary={item.label} sx={{ color: grey[800] }} />
              <IconButton edge="end">
                <ChevronRightOutlined color="#000" />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar>
        <Container maxWidth="lg" sx={{ padding: { xs: 0 } }}>
          <Toolbar>
            {/* Menu Button for Mobile */}
            <IconButton
              color="secondary"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
              sx={{ mr: 3, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Desktop Title with Icon */}
            <Typography
              variant="h6"
              color="secondary"
              display="flex"
              alignItems="center"
              ml={1}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <RocketIcon sx={{ mr: 1 }} />
              Abolade-GOS
            </Typography>

            {/* Mobile Page Name */}
            <Typography
              variant="h6"
              color="secondary"
              display="flex"
              alignItems="center"
              ml={1}
              sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
            >
              {getPageName()}
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <StyledNavButton
                  component={NavLink}
                  to={item.link}
                  key={item.label}
                  sx={{ padding: "10px 15px" }}
                >
                  {item.label}
                </StyledNavButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <SwipeableDrawer
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
    </>
  );
};

export default NavBar;
