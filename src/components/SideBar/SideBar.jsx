import { Drawer, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { List, ListItem } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useNavigate, useLocation } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    color: "black",
    backgroundColor: "teal",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: { display: "flex" },
  active: {
    background: "#f4f4f4",
  },
  paper: {
    background: "blue",
  },

  sideBarBackground: {
    backgroundColor: "teal",
  },
  itemColor: {
    color: "white",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon className={classes.itemColor} />,
      link: "/",
    },
    {
      title: "Crypto Currencies",
      icon: <MonetizationOnIcon className={classes.itemColor} />,
      link: "cryptocurrency",
    },
    {
      title: "Crypto News",
      icon: <NewspaperIcon className={classes.itemColor} />,
      link: "news",
    },
  ];

  return (
    <Drawer
      className={classes.sideBarBackground}
      variant="permanent"
      classes={{ paper: classes.paper }}
      PaperProps={{
        sx: {
          backgroundColor: "#264653",
          color: "white",
        },
      }}
      anchor="left"
    >
      <div>
        <Grid container spacing={2} direction="column">
          <br />
          <Grid container xs={12} direction="row" sx={{ mt: 5 }} spacing={1}>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <PaidIcon />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={9}>
              <Typography variant="h5" className={classes.title}>
                Crypto Assist
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <List>
              {menuItems.map((item) => (
                <div>
                  <ListItem
                    button
                    key={item.title}
                    onClick={() => {
                      navigate(item.link);
                    }}
                    className={
                      location.pathname === item.path ? classes.active : null
                    }
                  >
                    <ListItemIcon color="secondary">{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </div>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default SideBar;
