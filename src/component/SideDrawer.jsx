
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';
const BoxStyle= styled(Box)({
  display:"flex",
  flexDirection:"column",
  gap:"1.5rem",
  padding:"1.5rem 1.5rem"
})
const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} style={{padding:"1rem 1.5rem"}}>
      <BoxStyle>
      <Link to="/general"style={{textDecoration:"none"}}>General</Link>
      <Link to="/sports"style={{textDecoration:"none"}}>sports</Link>
      <Link to="/technology"style={{textDecoration:"none"}}>Technology</Link>
      <Link to="/entertainment"style={{textDecoration:"none"}}>Entertainment</Link>
      <Link to="/business"style={{textDecoration:"none"}}>Business</Link>
      <Link to="/health"style={{textDecoration:"none"}}>Health</Link>
      </BoxStyle>
    </Drawer>
  );
};

export default SideDrawer;

