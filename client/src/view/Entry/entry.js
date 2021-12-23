import * as React from 'react';
import { Link } from 'react-router-dom'
import { Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Paper ,Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material/';

import './entry.css';
import WRLDLogo  from "./../../assets/icon/LogoDesigne.png";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Typography color="inherit">
        World.protocol
      </Typography>{' '}
      {'2021'}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      walletReceveir: data.get('walletReceveir'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={true}
          sm={4}
          md={7}
          sx={{
            backgroundColor: 'black',
          }}xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Typography  component="h1" variant="h5"
              sx={{
              color: 'white',
              }}>
              System used for stop metamask hijack / scam  
            </Typography>

            <Typography  component="h3"
              sx={{
              color: 'white',
              }}>
              We need you to drop a external nonn metamask wallet for the wallet receveir input
            </Typography>
            <Grid container> 
            <img className='logo' src={WRLDLogo} />   
            </Grid>
          </Grid>
        
           
        <Grid
         item sx={{
            backgroundColor: '#FFFFFF',
         }} xs={false} sm={4} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'black',
            }}
          >
            <Typography  component="h1" variant="h5">
              Create your
            </Typography>
            <Typography component="h1" variant="h5">
             NFT authentification ticket
            </Typography>
            <Box  id="box" sx={{ m: 1, bgcolor: 'white' }} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div className='marge'></div>
              <TextField
                margin="normal"
                id="username"
                label="username"
                name="username"
                type="username"
                autoComplete="Username"
                autoFocus
              />
              <div className='marge'></div>
              <TextField
                id="walletreceveir"
                name="walletReceveir"
                label="External non-metamask wallet receveir"
                type="WalletReceveir"
                autoComplete="External (non-metamask) Avax Wallet "
              />
              <div className='margecontrol'></div>
              <FormControlLabel
              
                control={<Checkbox value="remember" color="primary" />}
                label="Accept the DAO system"
              />
                <Link href="#" variant="body2">
                    Read lite paper 
                </Link>

                
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
              >
                CREATE YOUR TICKET 
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}