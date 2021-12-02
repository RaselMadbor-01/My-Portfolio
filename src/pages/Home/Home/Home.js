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
import { makeStyles } from "@material-ui/core";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const useStyles = makeStyles((theme) => ({
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
    <div className="home-section">
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
              <Typography variant="h2" component="div" gutterBottom>
                Hi, I’m Md.Rasel <br /> a Junior Web Developer.
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
                  <LinkedInIcon/>
                </Fab>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <InstagramIcon/>
                </Fab>
                <Fab style={{backgroundColor:"rgb(174, 10, 207)",color:"white"}} aria-label="edit">
                <GitHubIcon/>
                </Fab>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Card className={classes.homePhoto} sx={{ maxWidth: 391,height:458, backgroundColor: "#262626" }}>
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
