import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import LOGO from "C:/Users/ACER/react-demo/src/images/Logo.jpeg";

const Footer = () => {
  return (
    <div
      style={{
        marginTop:"120px",
        backgroundColor: "black",
        padding: "20px",
        display:"flex",
        justifyContent:"space-between"
      }}
    >
      <Typography variant="h6" component="div" style={{ color: "white" }}>
        Subscribe to our Newsletter
      </Typography>
      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="Enter your email address"
          variant="outlined"
          size="small"
          style={{ marginRight: "10px" }}
        />
        <Button
          variant="contained"
          size="medium"
          style={{ backgroundColor: "white", color: "black" }}
        >
          Subscribe
        </Button>
      </form>
      <img
            style={{ width: "50px", marginRight: "50px" }}
            src={LOGO}
            alt=""
          />
    </div>
  );
};

export default Footer;
