import { Container, Fab, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { purple } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import photo3 from "../../../images/rasel4.png";
import "./Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { makeStyles } from "@material-ui/core";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const useStyles = makeStyles((theme) => ({
  homeSection: {
    backgroundImage:`linear-gradient(70deg,rgba(44,43,45,1)70%,rgb(174, 10, 207)30%)`,
    height:`100%`,
    width:`100%`,
    padding:`100px 0`,
    color:`#fff`,
    [theme.breakpoints.down("sm")]: {
      backgroundImage:`linear-gradient(70deg,rgba(44,43,45,1)70%,rgba(44,43,45,1)30%)`,
    },
  },
  homeInfo: {
    [theme.breakpoints.down("sm")]: {
      textAlign:"center"
    },
  },
  homePhoto: {
    [theme.breakpoints.down("sm")]: {
      margin:"0 auto",
    },
  },
}));

const Home = () => {
  const classes=useStyles();
  return (
    <div className={classes.homeSection}>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={12} md={6} className={classes.homeInfo}>
              <Typography variant="h3" component="div" gutterBottom>
               <div className="wrapper">
              <div className="static-text">
              Hi, I’m Md.Rasel</div> 
              <ul className="dynamic-text">
                <li><span>a Junior Web Developer.  </span></li>
                <li><span>Professional Coder.  </span></li>
              </ul>
               </div>
                {/* .Professional Coder.Developer. */}
              </Typography>
              <Typography sx={{mb:2}} variant="body1" gutterBottom>
                I'm a front‑end & back-end developer focused on crafting clean &
                user‑friendly experiences, I am passionate about building
                excellent software that improves the lives of those around me.
              </Typography>
              <ColorButton sx={{mb:2}} variant="contained"> <a className="resume-link" href="https://drive.google.com/file/d/1SKmkXUYHQS9yCcOYqjU_Bz_nNf2nvC6D/view?usp=sharing">Download Resume</a>  </ColorButton>
             
              <Box sx={{ "& > :not(style)": { m: 2 } }}>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <a className="resume-link" href="https://www.linkedin.com/in/md-rasel-madbor-17b5a7216/"><LinkedInIcon/></a>
                </Fab>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <a className="resume-link" href="https://www.instagram.com/rasel2493/"><InstagramIcon/></a>
                
                </Fab>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <a className="resume-link" href="https://twitter.com/MdRaselMadbor"><TwitterIcon/></a>
                
                </Fab>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <a className="resume-link" href="https://github.com/RaselMadbor-01"><GitHubIcon/></a>
                
                </Fab>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Card className={classes.homePhoto} sx={{ maxWidth: 391,height:458, backgroundColor: "#262626",boxShadow: 3,border: 1 , borderColor: 'secondary.main' }}>
                <CardMedia
                  component="img"
                  height="130%"
                  width="89%"
                  image={photo3}
                  alt="green iguana"
                />
              </Card>
          
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
