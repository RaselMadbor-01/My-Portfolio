import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import "./ContactForm.css";
import emailjs, {send} from "emailjs-com";
import { Alert, InputBase } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",
    },
}));
 
const ContactForm = () => {
    const[success,setSuccess]=useState(false);
    const[error,setError]=useState(false);
    const classes = useStyles();
    const form = useRef();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      const tempParams={
          name:data.name,
          email:data?.email,
          subject:data.subject,
          message:data.message
      }
    console.log(tempParams);
      emailjs.send("service_jgu5ybm","template_d80shsu",tempParams,"user_0fSR8WQzJJpPPxpd1Bhz4")
      .then(function(response) {
        if(response.status===200){
            setSuccess(true);
            reset();
        }
     }, function(error) {
        if(error){
           setError(true);
           reset();
           window.location.reload();
             
        }
     });
     reset();
    }

  return (
   <Box sx={{backgroundColor:"white",p:4,borderRadius: 8,m:2 }}>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        {success? <Alert severity="success">Your message was send successfully</Alert>: ""}
        
        { error?<Alert severity="error">Something was worng .Please Resubmit the form.</Alert>:""}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            type="text"
            name="name"
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                id="outlined-basic"
                label="Your Name"
                onBlur={onBlur}
                onChange={onChange}
                fullWidth
                checked={value}
                color="secondary"
                inputRef={ref}
                variant="outlined"
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            type="email"
            name="email"
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                id="outlined-basic"
                label="Your Email"
                onBlur={onBlur}
                color="secondary"
                onChange={onChange}
                fullWidth
                checked={value}
                inputRef={ref}
                variant="outlined"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            type="text"
            name="subject"
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Your Subject"
                onBlur={onBlur}
                color="secondary"
                onChange={onChange}
                fullWidth
                checked={value}
                inputRef={ref}
                variant="outlined"
                error={Boolean(errors.subject)}
                helperText={errors.subject?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            type="text"
            name="message"
            rules={{
              required: "This field is required",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                id="outlined-basic"
                label="Your Message"
                onBlur={onBlur}
                color="secondary"
                onChange={onChange}
                multiline
                rows={4}
                style={{width:"100%"}}
                checked={value}
                inputRef={ref}
                variant="outlined"
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={8}>
          <Button sx={{px:4}} color="secondary" variant="contained" type="submit" endIcon={<SendIcon />}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
   </Box>
  );
};

export default ContactForm;
