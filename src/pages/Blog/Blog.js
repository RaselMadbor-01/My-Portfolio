import { Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
    return (
        <div
      style={{
        backgroundColor: "rgba(44,43,45,1)",
        color: "white",
        height: "100vh",
      }}
    >
        <Typography
        sx={{ textAlign: "center", fontWeight: "bold", py: 4 }}
        variant="h2"
        gutterBottom
        component="div"
      >
        Blog <span style={{ color: "rgb(174, 10, 207)" }}> Cumming </span> Soon....
      </Typography>
      </div>
    );
};

export default Blog;