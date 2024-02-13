import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
// import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
const BoxStyled = styled(AppBar)({
  backgroundColor: "black",
  color: "white",
  height: "60px",
  position:"fixed",
  top:"0",
  zIndex:"1000",
  opacity:".8"
});
const BoxStyle= styled(Box)({
  display:"flex",
  gap:"1rem"
})
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log("clicked")
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <BoxStyled position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
            
          </IconButton>
     <SideDrawer open={isDrawerOpen} onClose={handleDrawerClose}/>
     <BoxStyle>
     <Link to="/general"style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            General
          </Typography>
     </Link>
     <Link to="/health"style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Health
          </Typography>
     </Link>
     <Link to="/technology"style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Technology
          </Typography>
     </Link>
     <Link to="/entertainment"style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Entertainment
          </Typography>
     </Link>
     <Link to="/sports"style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Sports
          </Typography>
     </Link>
     <Link to="/business" style={{textDecoration:"none", color:"white"}}>
     <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Business
          </Typography>
     </Link>
        
     </BoxStyle>
    
          {/* <Button color="inherit" style={{float:'right'}}>Login</Button> */}
        </Toolbar>
      </BoxStyled>
    </Box>
    </>
  );
};

export default Header;
