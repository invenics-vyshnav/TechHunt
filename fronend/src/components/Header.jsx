import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const pages = ['Home', 'Jobs', 'Resources', 'Mentorship', 'Network'];

function Header() {
  
  const [activePage, setActivePage] = React.useState('Home'); // Set 'Home' as the default active page

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '0px 180px 0px 180px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: '20px',
                fontWeight: 500,
                color: 'black',
             // marginRight: '4px',
                
              }}
            >
              Tech
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: '20px',
                color: '#2521FF',
                fontWeight: 700,
                marginRight: "15rem"
              }}
            >
              Hunt
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
             {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 6,
                  color: activePage === page ? 'blue' : 'black', //making active
                  marginLeft: 3,
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  textTransform:'capitalize'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' },width:"104px",height:"36px",color:'black', border: '2px solid black',ml:"2rem",borderRadius:"10px",justifyContent:"center"}}>
            <Button sx={{fontWeight: 600, fontSize: '12px',textTransform:'capitalize'}} color="inherit">Log in</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: "blue",ml:"2rem",borderRadius:"10px",width:"106px",height:"38px",justifyContent:"center"}}>
            <Button sx={{fontWeight: 600, fontSize: '12px',textTransform:'capitalize'}} color="inherit">Register</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
