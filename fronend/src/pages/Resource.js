import React from 'react';

import Header from '../components/Header';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

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

  const handlePlacementClick = () => {

    // Redirect to the placement folder URL

    window.open("https://drive.google.com/drive/folders/1ME38RYG6dDyTdrnoYORZDmcenRorJ4jM?usp=sharing");

  };

  const handleRoadmapClick = () => {

    // Redirect to the placement folder URL

    window.open("https://drive.google.com/drive/folders/1fYyrVGYy7oU_9PLjhuuOoBeSzYwJbWyO?usp=drive_link");

  };

 

  const handleresuleClick = () => {

    // Redirect to the placement folder URL

    window.open("https://drive.google.com/drive/folders/1X-KmzyL8Bx5FntsdbXMm6DfJxtBr9Nc3?usp=drive_link") ;

  };

 

  const handlecarrerClick = () => {

    // Redirect to the placement folder URL

    window.open("https://drive.google.com/drive/folders/1Kz4AOumSkLknI9qA0a5LI1k97Tc2jn2A?usp=drive_link");

  };

 

  return (

    <div>

      <Header />

      <Box>

        <Box sx={{ display: "inline-block", top: "122px" }}>

          <Typography sx={{ pl: "280px", fontWeight: 600, fontSize: "20px", lineHeight: "24.2px" }}>

            Resource Hub

          </Typography>

          <Box pl={"280px"} mt={"20px"}>

            {/* Wrap the image in an anchor tag */}

            <a href="YOUR_GOOGLE_DRIVE_PLACEMENT_URL_HERE" target="_blank" rel="noopener noreferrer" onClick={handlePlacementClick}>

              <img style={imageStyle} src={placement} alt="placement" />

            </a>

            {/* Repeat the pattern for other images */}

            <a href="YOUR_GOOGLE_DRIVE_PLACEMENT_URL_HERE" target="_blank" rel="noopener noreferrer" onClick={handleRoadmapClick}>

            <img style={imageStyle} src={career} alt="career" />

            </a>

            <a href="YOUR_GOOGLE_DRIVE_PLACEMENT_URL_HERE" target="_blank" rel="noopener noreferrer" onClick={handleresuleClick}>

            <img style={imageStyle} src={Resume} alt="resume" />

            </a>

            <a href="YOUR_GOOGLE_DRIVE_PLACEMENT_URL_HERE" target="_blank" rel="noopener noreferrer" onClick={handlecarrerClick}>

            <img style={imageStyle} src={email} alt="email" />

            </a>

          </Box>

        </Box>

      </Box>

    </div>

  );

}

 