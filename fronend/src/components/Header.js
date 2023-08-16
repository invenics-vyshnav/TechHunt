import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Jobs', 'Resources', 'Mentorship', 'Network'];

function Header() {
  
  const [activePage, setActivePage] = React.useState('Home'); // Set 'Home' as the default active page

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '0px 180px 0px 180px' }}>
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
          <div>
          <Box sx={{ display: 'flex',  alignItems: 'center' }}>
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
              marginRight: "120px"
            }}
          >
            Hunt
          </Typography>
        </Box>
          </div>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
             {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 6,
                  color: activePage === page ? 'black' : '#6B6868', //making active
                  // marginLeft: 3,
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  fontSize: '12px',
                  textTransform:'capitalize'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex'}, marginLeft: '10px',color:'black',mr : '19px', border: '2px solid black',borderRadius:"10px",justifyContent:"center"}}>
            <Button sx={{fontWeight: 600, fontSize: '12px', textTransform:'capitalize', width:"104px",height:"36px"}} color="inherit">
                <Link style={{textDecoration: 'none', color : 'black'}} to='/login'>
                Log in
                </Link>
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: "blue",borderRadius:"10px",justifyContent:"center"}}>
            <Button sx={{fontWeight: 600, fontSize: '12px',textTransform:'capitalize', width:"106px",height:"38px"}} color="inherit">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/register'>
            Register
            </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
