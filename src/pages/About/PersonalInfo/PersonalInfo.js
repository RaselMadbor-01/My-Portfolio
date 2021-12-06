import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
const PersonalInfo = () => {
  return (
    <div style={{width:"100%"}}>
        {/* <Avatar
        alt="Remy Sharp"
        src={photo2}
        sx={{ width: 150, height: 156, bgcolor: pink[500],mx:"auto" }}
        /> */}
      <Typography
        style={{ textAlign: "center" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Personal Info
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
              <Typography variant="h6" gutterBottom>
                First Name:<span style={{fontWeight:"200"}}>Rasel</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
              Age:<span style={{fontWeight:"200"}}> 26 Years</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
              Phone:<span style={{fontWeight:"200"}}>1311211424</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
              Nationality:<span style={{fontWeight:"200"}}>Bangladeshi</span>
              </Typography>
          </Grid>
          <Grid item md={6}>
          <Typography variant="h6" gutterBottom>
              Last Name:<span style={{fontWeight:"200"}}>Madbor</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
              Address:<span style={{fontWeight:"200"}}>Dhaka</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
              Email:<span style={{fontWeight:"200"}}>md.raselmadbor01@gmail.com</span>
              </Typography>
              <Typography variant="h6" gutterBottom>   
              Langages:<span style={{fontWeight:"200"}}>Bangla,English,Hindi</span>
              </Typography>
          </Grid>
          <ColorButton sx={{mx:"auto",my:4}} variant="contained"> <a className="resume-link" href="https://drive.google.com/file/d/1SKmkXUYHQS9yCcOYqjU_Bz_nNf2nvC6D/view?usp=sharing">Download Resume</a>  </ColorButton>
        </Grid>
      </Box>
    </div>
  );
};

export default PersonalInfo;
