import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

// Common styles
const commonStyles = {
  fontFamily: "Montserrat",
  fontWeight: "900",
  fontSize: "48px",
  lineHeight: "1.3",
};

const Home = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: "3rem",
          px: "2rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            ...commonStyles,
            color: "#000000",
            ml: "auto",
            mr: "auto",
          }}
        >
          We Grow Careers
        </Typography>

        <Typography
          variant="h2"
          sx={{
            ...commonStyles,
            color: "#000000",
            mt: " 0px", // Add a bit of margin between the two headings
          }}
        >
          Start your search with us
        </Typography>
      </Box>
      <Box mb={{ xs: "1rem", md: "1rem" }} mt={{ lg: "1rem" }}>
        <Box>
          <Typography
            textAlign={"center"}
            variant="body1"
            sx={{
              color: "#6B6868",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "19.5px",
              ml: "2rem",
            }}
          >
            Embark on a journey of self-discovery with TechHunt. Explore
          </Typography>
        </Box>
        <Box ml={"3rem"} mt={"0.5rem"}>
          <Typography
            textAlign={"center"}
            variant="body1"
            sx={{
              color: "#6B6868",
              fontSize: "16px",
            }}
          >
            endless career possibilities and find your path with us
          </Typography>
        </Box>
      </Box>

      <Box mt="1rem" display="flex" justifyContent="center">
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            color: "white",
            ml: "4rem",
            backgroundColor: "blue",
            borderRadius: "10px",
            justifyContent: "center",
            marginRight: "21px",
            width: "150px",
            ...commonStyles,
          }}
        >
          <Button
            color="inherit"
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: "700",
                fontSize: "12px",
                textTransform: "capitalize",
              }}
            >
              <Link
                to="/jobs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Explore Jobs
              </Link>
            </Button>
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            borderRadius: "10px",
            border: "2px solid black",
            justifyContent: "center",
            width: "150px",
            ...commonStyles,
          }}
        >
          <Button
            color="inherit"
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            <Link to="/resources" style={{ textDecoration: "none", color: "black" }}>
              Resources
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;