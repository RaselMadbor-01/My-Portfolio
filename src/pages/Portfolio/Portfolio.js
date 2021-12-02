import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Portfolio.css";

const Portfolio = () => {
    const[info,setInfo]=useState([]);
    useEffect(()=>{
        fetch("./fakePortfolio.json")
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
  return (
    <div
      style={{
        backgroundColor: "rgba(44,43,45,1)",
        color: "white",
        height: "100%",
        padding:"50px 0 100px 0"
      }}
    >
      <Container>
      <Typography sx={{ textAlign: 'center',fontWeight: 'bold',pt:4 }} variant="h2" gutterBottom component="div">
         <span style={{color:"rgb(174, 10, 207)"}}> My</span> Portfolio
      </Typography>
        <Box sx={{ flexGrow: 1, pt: 4 }}>
          <Grid container spacing={2}>
           {
               info.map(el=> <Grid key={el.id} item xs={12} sm={6} md={4}>
                <div className="card-info">
                    <img style={{width:"100%",height:"100%"}} src={el.image} alt="" />
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",textAlign:"center"}}>
                        
                    <Typography gutterBottom variant="h6" style={{color:"rgb(174, 10, 207)"}} component="div">
                      WEBSITE NAME:
                    </Typography>
                    <Typography variant="h5" style={{fontWeight:"bold",color:"lightgray"}} gutterBottom component="div">
                       {el.projectName}
                    </Typography>
                    </Box>
                  
                </div>
              </Grid>)
           }
           
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Portfolio;
