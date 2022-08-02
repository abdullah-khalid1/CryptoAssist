import { Drawer, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { List, ListItem } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const menuItems = [
  {
    title: "Home",
    icon: <HomeIcon color="secondary" />,
    link: "/",
  },
  {
    title: "Crypto Currencies",
    icon: <MonetizationOnIcon color="secondary" />,
    link: "cryptocurrency",
  },
  {
    title: "Crypto Exchanges",
    icon: <CurrencyExchangeIcon color="secondary" />,
    link: "/cryptoexchange",
  },
  {
    title: "News",
    icon: <NewspaperIcon color="secondary" />,
    link: "/news",
  },
];

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Crypto Assist
          </Typography>

          <List>
            {menuItems.map((item) => (
              <div>
                <ListItem
                  button
                  key={item.title}
                  onClick={() => navigate(item.link)}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  <ListItemIcon color="secondary">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
