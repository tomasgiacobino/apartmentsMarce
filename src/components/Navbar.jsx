import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuList = [
    {
      menu: "Home",
      icon: <HomeIcon />,
    },
    {
      menu: "About",
      icon: <InfoIcon />,
    },
    {
      menu: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      menu: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      menu: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      menu: "About",
      icon: <InfoIcon />,
    },
  ];
  return (
    <nav>
      <div>
        <h2>Terra Maria</h2>
      </div>
      {/* <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div> */}
      <div className="navbar-links-container">
        <a href="#">Inicio</a>
        <a href="#">Departametos</a>
        <a href="#">Contacto</a>
        <a href="#">Opiniones</a>
        <button className="primary-button">Contactame</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuList.map((item) => (
              <ListItem key={item.menu} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.menu}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
