import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height:"100%",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

const SpecificeProject = ({ el, open, setOpen, handleOpen }) => {
  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        Show Details
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <Grid item sm={12} md={6}>
                  <Grid item sm={12} md={6}>
                    <img src={el?.detailImages?.image4} alt="" />
{/*                  
                    <img src={el?.detailImages?.image2} alt="" /> */}
                  </Grid>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Grid item sm={12} md={6}>
                    {/* <img src={el?.detailImages?.image3} alt="" />
                
                    <img src={el?.detailImages?.image4} alt="" /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={6}></Grid>
            </Grid>

            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Button onClick={() => setOpen(false)}>
              {" "}
              <CloseIcon></CloseIcon>
            </Button>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SpecificeProject;
