import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  skillWidth: {
    width:"420px",
    paddingBottom:"30px",
    [theme.breakpoints.down("sm")]: {
      width:"200px"
    },
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 420,
  borderRadius: 5,
  [theme.breakpoints.down("sm")]: {
    width:"300px",
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "#201f1f" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#af0ab4" : "#201f1f",
  },
}));

const Skills = () => {
  const classes=useStyles();
  return (
    <div className={classes.skillWidth}>
        <Typography style={{textAlign:"center"}} variant="h4" gutterBottom component="div">
        My Skills
      </Typography>
      <Box sx={{pb:3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            html
          </Typography>
          <Typography variant="caption" component="div">
            76%
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={76} />
      </Box>
      <Box sx={{pb:3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            css
          </Typography>
          <Typography variant="caption" component="div">
            80%
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={80} />
      </Box>
      <Box sx={{pb:3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            javascript
          </Typography>
          <Typography variant="caption" component="div">
            85%
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={85} />
      </Box>
      <Box sx={{pb:3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            react
          </Typography>
          <Typography variant="caption" component="div">
            70%
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>
      <Box sx={{pb:3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            node js
          </Typography>
          <Typography variant="caption" component="div">
            60%
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={60} />
      </Box>
      
    </div>
  );
};

export default Skills;
