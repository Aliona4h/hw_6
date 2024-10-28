import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Drawer variant="permanent" sx={{ width: 200, flexShrink: 0 }}>
    <List variant="permanent" sx={{ width: 200 }}>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/heroes">
        <ListItemText primary="Heroes" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
    </List>
  </Drawer>
);

export default NavBar;
