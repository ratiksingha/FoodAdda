import React from "react";
import "./css/Header.css";
import { LOGO_URL } from "./constant";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Company Logo" />
            </div>
            <div className="nav-items">
            <List>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/" aria-label="Home">
                <ListItemText primary="Home" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/about" aria-label="About Us">
                <ListItemText primary="About Us" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/order" aria-label="Order">
                <ListItemText primary="Order" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/contact" aria-label="Contact">
                <ListItemText primary="Contact" />
            </ListItemButton>
        </ListItem>
    </List>
            </div>
            
            
        </div>
       
    );
}
export default Header;