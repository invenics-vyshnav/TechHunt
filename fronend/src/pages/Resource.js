import React from 'react'; // Import React, you don't need to import everything with '*'
import Header from '../components/Header';
import Box from '@mui/material/Box'; // Import the 'Box' component
import Typography from '@mui/material/Typography'; // Import the 'Typography' component'
import Resume from '../images/Resume.png';
import email from '../images/email.png';
import placement from '../images/placement.png';
import career from '../images/career.png';


const imageStyle = {
    width: "240px",
    minHeight: "151px",
    borderRadius: "10px",
    border: "1px solid #C4C4C4",
    cursor: "pointer",
    margin: "0 5px 5px",
  };
export default function BoxSx() {
  return (
    <div> {/* Wrap multiple components in a single parent */}
      <Header />
      <Box>
      <Box sx={{display:"inline-block",top:"122px"}}>
        <Typography sx={{pl:"280px",fontWeight:600,fontSize:"20px",lineHeight:"24.2px"}} >
          Resource Hub
        </Typography>
        <Box pl={"280px"} mt={"20px"}>
        <img style={imageStyle} src={placement} alt="placement" />
          <img style={imageStyle} src={career} alt="career" />
          <img style={imageStyle} src={Resume} alt="resume" />
          <img style={imageStyle} src={email} alt="email" />
        </Box>
        {/* <Box
      sx={{
        width: "240px",
        minHeight: "151px",
        borderRadius:"10px",
        border: "1px solid #C4C4C4",
        ml:"250px",
        mt:"20px"
      }}
    /> */}
      </Box>
      </Box>
    </div>
  );
}
