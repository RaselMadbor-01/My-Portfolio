import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DraftsIcon from "@mui/icons-material/Drafts";
import MapIcon from "@mui/icons-material/Map";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const ContactInfo = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom component="div">
        DON'T BE SHY !
      </Typography>
      <Typography sx={{my:4}} variant="body1" gutterBottom>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </Typography>
      <Stack
        direction="row"
        justifyContent="fles-start"
        alignItems="flex-start"
        spacing={2}
      >
        <span style={{ color: "rgb(174, 10, 207)" }}>
          <MapIcon sx={{fontSize:"35px"}} />
        </span>
        <Box>
          <Typography variant="button" display="block" gutterBottom>
            ADDRESS POINT
          </Typography>
          <Typography variant="body2" gutterBottom>
            637/6 -Ghatarchar, keraniganj, Dhaka-1312
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="fles-start"
        alignItems="flex-start"
        spacing={2}
        sx={{my:2}}
      >
        <span style={{ color: "rgb(174, 10, 207)" }}>
          <DraftsIcon sx={{fontSize:"35px"}} />
        </span>
        <Box>
          <Typography variant="button" display="block" gutterBottom>
            MAIL ME
          </Typography>
          <Typography variant="body2" gutterBottom>
            md.raselmadbor01@gmail.com
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="fles-start"
        alignItems="flex-start"
        spacing={2}
      >
        <span style={{ color: "rgb(174, 10, 207)"}}>
          <AddIcCallIcon sx={{fontSize:"35px"}} />
        </span>
        <Box>
          <Typography variant="button" display="block" gutterBottom>
            CALL ME
          </Typography>
          <Typography variant="body2" gutterBottom>
            +880-1311-211424
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
