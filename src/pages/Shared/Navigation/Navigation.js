import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatIcon from "@mui/icons-material/Chat";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  styleForLargeDivise: {
    position: "absolute",
    top: "145px",
    right: "25px",
    zIndex:"2",
    backgroundColor:"transparent",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      top: "87%",
      right: "0%",
      backgroundColor: "rgb(224 13 250)",
      height: "44px",
      padding:"20px 0",
      width:"100%"
    },
  },
  navBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
  },
  navText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleForLargeDivise}>
      <div className={classes.navBar}>
        <Box>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? "rgb(224 13 250)" : "white",
              textDecoration: "none",
            })}
          >
            <div className="link-button">
              <span className={classes.navText}>
              <h3 className="link-button-text">Home</h3>
              </span>
              <span className="link-button-icon">
                <HomeIcon />
              </span>
            </div>
          </NavLink>
         </Box>
         <Box>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "rgb(224 13 250)" : "white",
              textDecoration: "none",
            })}
          >
            <div className="link-button">
           <span className={classes.navText}>
           <h3 className="link-button-text">About</h3>
           </span>
              <span className="link-button-icon">
                <BusinessCenterIcon />
              </span>
            </div>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              color: isActive ? "rgb(224 13 250)" : "white",
              textDecoration: "none",
            })}
          >
            <div className="link-button">
              <span className={classes.navText}>
              <h3 className="link-button-text">Portfolio</h3>
              </span>
              <span className="link-button-icon">
                <PersonIcon />
              </span>
            </div>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "rgb(224 13 250)" : "white",
              textDecoration: "none",
            })}
          >
            <div className="link-button">
             <span className={classes.navText}>
             <h3 className="link-button-text">Contact</h3>
             </span>
              <span className="link-button-icon">
                <DraftsIcon />
              </span>
            </div>
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? "rgb(224 13 250)" : "white",
              textDecoration: "none",
            })}
          >
            <div className="link-button">
             <span className={classes.navText}> 
             <h3 className="link-button-text">Blog</h3>
             </span>
              <span className="link-button-icon">
                <ChatIcon />
              </span>
            </div>
          </NavLink>
        </Box>
      </div>
    </div>
  );
};

export default Navigation;
