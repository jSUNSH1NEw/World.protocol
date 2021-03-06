import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem , Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import './header.css';
import WRLDIcon from "../../../../assets/icon/WorldEconomy.png";
import WRLDIcon2 from "../../../../assets/icon/coin.png";

const pages = ['Ecosystem','Learn','Initiative','Roadmap'];

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
  const SearchPhone = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
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

  const SearchIconWrapperPhone = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'flex-start',
  }));


  
  const StyledInputBase = styled('div')(({ theme }) => ({
    display: 'flex',
    border: `1px solid`,
    borderRadius: '35px',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "black",
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

  const StyledInputBasePhone = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'inherit',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
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
    <AppBar position="static" sx={{ backgroundColor:'rgba(255,255,255,0.0) ', boxShadow:'0', zIndex:'1', flexGrow: 1, fontStyle:'MontSerrat'}}>
      <Container maxWidth="xl">
        <Toolbar  sx={{ mr: 10 }}>

        <img className='logos' src={WRLDIcon} alt="Logo of world protocol" />   
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >  
          </Typography>
          <Box sx={{ flexGrow: 1, mt:1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Burger Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            > 
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", fontSize: "16px" },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Ecosystem</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">learn</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Initiative</Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <SearchPhone sx={{ display: { xs: "flex", md: "none" } }}>
                    <SearchIconWrapperPhone> 
                      <img className='logos2' src={WRLDIcon2} alt='Logo of world into the navbar' />    
                    </SearchIconWrapperPhone> 

                    <StyledInputBasePhone
                    data="Our prices"
                    inputProps={{ 'aria-label': 'search' }}> 
                      0.00 $
                    </StyledInputBasePhone>
                  </SearchPhone>
                </MenuItem>
              
            </Menu>
          </Box>
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper> 
              <img className='logos2' src={WRLDIcon2} alt='Logo of world into the navbar' />    
            </SearchIconWrapper> 

            <StyledInputBase
              data="Our prices"
              inputProps={{ 'aria-label': 'search' }}> 
                0.00 $
            </StyledInputBase>
          </Search>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>

          {pages.map((page) => (
            
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 5, color: 'white', display: 'block', }}
              >
                
                <Typography noWrap>
                 {page}
                </Typography>
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
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon" target="_blank">
                    <Typography textAlign="center">GitHub</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="https://twitter.com/World_Protocol" target="_blank">
                    <Typography textAlign="center">Tweeter</Typography>
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;