import React from "react";

import JobComp from "../components/JobComp";

import { Box, Typography } from "@mui/material";

import image1 from "../assets/images/image1.png";

import Header from '../components/Header';

 

 

const mentorship = () => {

  // Array of static job data

  const jobDataList = [

    {

      company_logo: image1,

      company_name: "Henry Cavill",

      company_desc: "Invenics",

      is_remote_available: "Invenics",

      role: "UI/UX Designer",

      salary: "$60,000 - $90,000",

      location: "San Francisco, CA",

    },

    {

      company_logo: image1,

      company_name: "Laura Paul",

      company_desc: "IBM, ex- Google",

      is_remote_available: "IBM, ex- Google",

      role: "Software Developer Engineer",

      salary: "$60,000 - $70,000",

      location: "UK",

    },

    {

      company_logo: image1,

      company_name: "Sandra Shekar",

      company_desc: "KPMG",

      is_remote_available: false,

      role: "Technical Analyst",

      salary: "$40,000 - $50,000",

      location: "UK",

    },

    // Add more job data objects as needed

  ];

 

 

  return (

    <div>

       <Header/>

       <Box sx={{display:"inline-block",top:"122px"}}>

        <Typography sx={{pl:"280px",fontWeight:600,fontSize:"20px",lineHeight:"24.2px"}} >

          Mentors

        </Typography>

        </Box>

    <Box

      sx={{

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        padding: "40px",

      }}  

    >

     

      {jobDataList.map((jobData, index) => (

        <JobComp

          key={index}

          company_logo={jobData.company_logo}

          company_name={jobData.company_name}

          company_desc={jobData.company_desc}

          is_remote_available={jobData.is_remote_available}

          role={jobData.role}

          salary={jobData.salary}

          location={jobData.location}

        />

      ))}

    </Box>

    </div>

  );

};

 

export default mentorship;