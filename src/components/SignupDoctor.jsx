import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../index.css'

const SignupDoctor=()=>{
return (
<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 15,
          width: '35rem',
          height: '40rem',
          display: 'block',
          marginLeft:'auto',
          marginRight:'auto',
          
        },
      }}
    >
      
      <Paper elevation={3} style={{top:'10rem' , textAlign:'center'}} >

        <h1>Sign Up</h1> 
        <h3>Name</h3>
        <input type="text" />
        <h3>Doctor Id</h3>
        <input type="text" />
        <h3>Email</h3>
        <input type="email" />
        <h3>Phone Number</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type='password'></input><br/>
        <button type='submit'>Login</button>

        </Paper>
    </Box>
);
}
export default SignupDoctor;
