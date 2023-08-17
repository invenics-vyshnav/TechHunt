import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Resources', path: '/resource' },
  { name: 'Mentorship', path: '/mentorship' },
  { name: 'Network', path: '/network' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Home'); // Set 'Home' as the default active page
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
                key={page.name}
                onClick={() => handlePageClick(page.name)}
                sx={{
                  my: 6,
                  color: activePage === page.name ? 'black' : '#6B6868',
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  fontSize: '12px',
                  textTransform:'capitalize'
                }}
                component={RouterLink}
                to={page.path}
              >
                {page.name}
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
