import vedioBg1 from "./Assests/VedioBg1.mp4";
import React from 'react'
import "./index.css";
import PatientRegister from "./patient/PatientRegister";
import Footer from "./components/Footer";
import AddImage from "./components/AddImage";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'


const Main = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <>
     
      <div className="login_spot">
        <h1>Welcome to tumor</h1>
        <span className="buttons_login">
        
    <div>
      <button><Link to='/PatientRegister' style={{ color:'white', textDecoration:'none'}}>Register</Link></button>
    </div>
          
            
          <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Login
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><h1><Link to='/DoctorLogin' style={{ textDecoration:'none'}}>Doctor</Link></h1></MenuItem>
        <MenuItem onClick={handleClose}><h1><Link to='/PatientLogin' style={{ textDecoration:'none'}}>Patient</Link></h1></MenuItem>
        <MenuItem onClick={handleClose}><h1><Link to='/AdminLogin' style={{ textDecoration:'none'}}>Admin</Link></h1></MenuItem>
      </Menu>
    </div>
        
        
        </span>
      </div>

      <div className="main">
        <video src={vedioBg1} autoPlay loop muted></video>
        <Footer />
        {/* <AddImage /> */}
      </div>
    </>
  );
};
export default Main;
