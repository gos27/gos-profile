import React, { useState } from "react";
import {
  Container,
  Typography,
  MenuList,
  MenuItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menus from "./data";

const MenuListItems = ({ list }) => {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (item) => {
    setOpenMenus((prev) => ({
      ...prev,
      [item.label]: !prev[item.label],
    }));
  };
  console.log(menus);
  return (
    <MenuList sx={{ bgcolor: "background.paper", borderRadius: 2, p: 1 }}>
      {list.map((item) => (
        <div key={item.to}>
          <MenuItem
            sx={{ pl: item.children ? 2 : 1 }}
            onClick={() => item.children && handleToggle(item)}
          >
            <Link
              to={item.to || "#"}
              style={{
                textDecoration: "none",
                color: "inherit",
                flexGrow: 1,
              }}
            >
              <ListItemText primary={item.label} />
            </Link>
            {item.children &&
              (openMenus[item.label] ? <ExpandLess /> : <ExpandMore />)}
          </MenuItem>

          {item.children && (
            <Collapse in={openMenus[item.label]} timeout="auto" unmountOnExit>
              <MenuListItems list={item.children} />
            </Collapse>
          )}
        </div>
      ))}
    </MenuList>
  );
};

export default function Treeview({ menus = [] }) {
  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        border: 2,
        margin: 2,
        minHeight: "230px",
      }}
    >
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Nested Menu
      </Typography>
      <MenuListItems list={menus} />
    </Container>
  );
}
