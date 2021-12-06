import { Button, Container, Grid} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core";
import SpecificeProject from "./SpecificeProject/SpecificeProject";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const Portfolio = () => {
  const [info, setInfo] = useState([]);


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);





  const classes = useStyles();
  useEffect(() => {
    fetch("./fakePortfolio.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgba(44,43,45,1)",
        color: "white",
        height: "100%",
        padding: "50px 0 150px 0",
      }}
    >
      <Container>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", pt: 4 }}
          variant="h2"
          gutterBottom
          component="div"
        >
          <span style={{ color: "rgb(174, 10, 207)" }}> My</span> Portfolio
        </Typography>
        <Box sx={{ flexGrow: 1, pt: 4 }}>
          <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing={4}>
            {info.map((el) => (
              <Grid key={el.id} item xs={12} sm={6} md={4}>
                <div className="cardInfo">
                  <img
                    className="cardPhoto"
                    style={{ width: "100%", height: "100%" }}
                    src={el.image}
                    alt=""
                  />
                  <div className="cardText">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >

                      <Typography
                        variant="h6"
                        style={{
                          fontWeight: "bold",
                          color: "rgb(174, 10, 207)",
                        }}
                        gutterBottom
                        component="div"
                      >
                        {el.projectName}
                      </Typography>
                      <Button
                        color="secondary"
                        // sx={{backgroundColor:"#7625b2"}}
                        variant="contained"
                        size="medium"
                      >
                        <Link style={{textDecoration:"none",color:"white"}} to={ `/portfolio/${el.id}`}>Show Details</Link>
                        {/* <SpecificeProject el={el} open={open} setOpen={setOpen} handleOpen={handleOpen}>     
                      Show Details  </SpecificeProject> */}
                       </Button>
                 
                    </Box>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Portfolio;
