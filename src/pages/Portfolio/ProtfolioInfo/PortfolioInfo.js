import { Button, Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";


const PortfolioInfo = () => {
  let params = useParams();
  let navigate = useNavigate();
  const handleBackToPortfolio=()=> {
    navigate("/portfolio");
  }
  const [specificeProject, setSpecificeProject] = useState({});
  useEffect(() => {
    fetch("/fakePortfolio.json")
      .then((res) => res.json())
      .then((result) => {
        const newInfo = result.find((item) => item.id == params?.projectId);

        setSpecificeProject(newInfo);
      });
  }, []);

  console.log(params.projectId);
  return (
    <div
      style={{
        backgroundColor: "rgba(44,43,45,1)",
        color: "white",
        height: "100%",
        padding: "100px 0 150px 0",
      }}
    >
      <Container>
    
        <Box sx={{ flexGrow: 1 , pt: 4 }}>
        <Button sx={{ fontSize: 16}}  color="secondary"
                  variant="contained" onClick={handleBackToPortfolio}>
              {" "}
              <CloseIcon></CloseIcon>
            </Button>
          <Grid
            sx={{
              boxShadow: 3,
              borderColor: "secondary.main",
              borderRadius: 1,
              p: 4,
              ml: 1,
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{padding:0}}
            >
              <Grid
                item
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ margin: "8px", width: "180px" }}
                  src={specificeProject?.image1}
                  alt=""
                />
                <img
                  style={{ margin: "8px", width: "180px" }}
                  src={specificeProject?.image2}
                  alt=""
                />
              </Grid>
              <Grid
                item
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ margin: "8px", width: "180px" }}
                  src={specificeProject?.image3}
                  alt=""
                />
                <img
                  style={{ margin: "8px", width: "180px" }}
                  src={specificeProject?.image4}
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}  style={{padding:0}}>
              <Typography
                sx={{ fontWeight: "Medium", pt: 4 }}
                variant="h4"
                gutterBottom
                component="div"
              >
                {specificeProject?.projectName}
              </Typography>
              <Typography sx={{pr:2,my:2}} variant="body1" gutterBottom>
                {specificeProject?.detailInfo}
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={specificeProject?.LiveSiteLink}
                  >
                    {" "}
                    Live Link
                  </a>
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={specificeProject?.ClientSiteLink}
                  >
                    Client Site Code
                  </a>
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={specificeProject?.ServerSiteLink}
                  >
                    Server Site Code
                  </a>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default PortfolioInfo;
