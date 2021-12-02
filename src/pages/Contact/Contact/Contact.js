import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
       <div style={{backgroundColor:"rgba(44,43,45,1)",color:"white",height:"100%",padding:"50px 0"}}>
            <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ textAlign: 'center',fontWeight: 'bold',pt:4 }} variant="h2" gutterBottom component="div">
        Get in <span style={{color:"rgb(174, 10, 207)"}}> touch</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={6} md={4}>
            <ContactInfo/>
            </Grid>
        <Grid item sm={6} md={8}>
            <ContactForm/>
            </Grid>
        </Grid>
        </Box>
   </Container>
       </div>
    );
};

export default Contact;