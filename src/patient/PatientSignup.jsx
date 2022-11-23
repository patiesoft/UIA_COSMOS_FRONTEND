import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../index.css";
import PatientLogin from "./PatientLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#0f0f0f",
  border: "2px solid #0f0f0f",
  boxShadow: 24,
  p: 4,
  borderRadius: "2rem",
  // boxShadow: "0px 10px -14px 14px #FFF",
  color: "grey",
};

export default function PatientSignup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Signup</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            <h1 style={{ color: "white", fontWeight: "50" }}>
              Create new account
            </h1>
            <p>Please fill in the form to create account</p>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            <input
              className="signup_input"
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              className="signup_input"
              placeholder="Email Address"
            />

            <input
              type="text"
              className="signup_input"
              placeholder="Phone Number"
            />

            <input
              type="password"
              placeholder="Password"
              className="signup_input"
            ></input>

            <button type="submit" className="btn">
              Sign Up
            </button>
            <p>
              Have an Account?{" "}
              <span>
                <PatientLogin />
              </span>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
