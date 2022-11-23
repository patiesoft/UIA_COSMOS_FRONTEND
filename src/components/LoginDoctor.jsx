import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../index.css";

const LoginDoctor = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 15,
          width: "25rem",
          height: "30rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
    >

      <Paper elevation={3} style={{ top: "10rem", textAlign: "center" }}>
        <h1>Login</h1>
        <h3>Email</h3>
        <input type="email" />
        <h3>Password</h3>
        <input type="password"></input>
        <br />
        <button type="submit">Login</button>
      </Paper>
    </Box>
  );
};
export default LoginDoctor;
