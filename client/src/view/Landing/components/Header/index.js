import * as React from 'react';
import Scroll from 'react-scroll';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem , InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import './header.css';
import WRLDIcon from "../../../../assets/icon/coin.png";


const pages = ['Our Team','Roadmap'];
const settings = ['Github', 'Tweeter'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 //Scrolable links for the header
const ScrollLink = Scroll.ScrollLink

  //Styled Components MUI

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '25ch',
    height: '35px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(5),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'inherit',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
    },
  }));

  return (
    <AppBar position="static" sx={{ backgroundColor:'rgba(255,255,255,0.0) ', boxShadow:'0', zIndex:'1',}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <img className='logos' src={WRLDIcon} />   
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 100, display: { xs: 'none', md: 'flex' } }}
          >         
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Search>
            <SearchIconWrapper> 
              <img className='logos2' src={WRLDIcon} />    
            </SearchIconWrapper> 

            <StyledInputBase
              data="Our prices"
              inputProps={{ 'aria-label': 'search' }}
            > 0.16 $</StyledInputBase>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 1, display: { xs: 'none', md: 'flex' } }}
          >         
          </Typography>

          </Search>
          <Box sx={{ flexGrow: 1, display:'flex' }}>

          {pages.map((page) => (
            
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 5, color: 'white', display: 'block' }}
              >
                {page}
              </Button>

          
            ))}
            
            <Tooltip title="Open social">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography
                noWrap
                component="div"
                sx={{ ml: 1, display: { xs: 'none', md: 'flex', color:'white' } }}
                >
                SOCIAL
          </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '65px' }}
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
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;