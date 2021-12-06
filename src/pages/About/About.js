import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Avatar, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Skills from "./Skills/Skills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import { green, pink } from '@mui/material/colors';
import photo2 from "../../images/rasel2.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  summaryText: {
    textAlign:"center",
    padding:"20px 100px 40px 100px",
    [theme.breakpoints.down("sm")]: {
      padding:"10px 20px",
    },
  },
}));

const About = () => {
  const classes=useStyles();
  return (
    <div
      style={{
        backgroundColor:"rgba(44,43,45,1)",
        color:"white",
        height:"100%",
        padding:"50px 0 150px 0",
      }}
    >
      <Container>
      <Avatar
        alt="Remy Sharp"
        src={photo2}
        sx={{ width: 132, height: 148, bgcolor: pink[500],mx:"auto" }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold", py: 1 }}
            variant="h2"
            gutterBottom
            component="div"
          >
            About <span style={{ color: "rgb(174, 10, 207)" }}> Me</span>
          </Typography>
          <Typography   className={classes.summaryText} variant="body1" gutterBottom>
          I am a self-motivated web developer with huge knowledge and
self-thought.Comfortable with React, Node, MongoDB, and many web-based
technologies. My passion is to learn new technologies.
      </Typography>
          <Grid container spacing={4}>
            <Grid item  sm={12} md={6}>
              <PersonalInfo />
            </Grid>
            <Grid item  sm={12} md={6}>
              <Skills />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default About;
