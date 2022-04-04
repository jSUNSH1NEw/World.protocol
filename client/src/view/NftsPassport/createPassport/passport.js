import * as React from 'react';
import { CssBaseline,TextField,FormControlLabel,Checkbox,Paper ,Box,Button, Grid, Typography, createTheme, ThemeProvider,Link } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import { useMoralis, useMoralisWeb3Api, useNewMoralisObject } from 'react-moralis';
import { PositionedSnackbar, PositionedSnackbar2 } from './entry.styles.js'


import './entry.css';
import WRLDLogo  from "./../../../assets/icon/LogoDesigne.png";
//{isAuthenticated&&chainId==='0xa869'?<Redirect to={'/buy'}/>:null}


function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props} >
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
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [walletReceiver, setWalletReceiver] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [getTWRLD, setgetTWRLD] = React.useState();
  const { isAuthenticated, chainId, signup, user } = useMoralis();
  const { native } = useMoralisWeb3Api();
  const {isSaving, error, save} = useNewMoralisObject('DaoUsers');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    data.append('username', username);
    data.append('walletReceiver', walletReceiver);
    console.log({
      username,
      walletReceiver,
    });

     save ({
          username: username,
          walletReceveir: walletReceiver,
          date: new Date(),
      });
    signup(data);
  };

  const getPassport = (event) => {
    event.preventDefault();
    isAuthenticated && chainId === '0xa869' ? setgetTWRLD(true) : setgetTWRLD(false);
    const data = new FormData();
    // eslint-disable-next-line no-console
    data.append('username', username);
    data.append('walletReceiver', walletReceiver);
    
    console.log({
      username,
      walletReceiver,
    });
    setLoading(true);
  };

  const SignTWRLD = (event) => {
    event.preventDefault();
  };

    

  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item
          sx={{
            backgroundColor: 'black',
            
          }}xs={true} sm={4} md={7} component={Paper} elevation={6} square>
            <PositionedSnackbar />
            <Grid container> 
            <img className='logo' src={WRLDLogo} alt="Logo of world protocol" />   
            </Grid>
          </Grid>
        
           
        <Grid
         item sx={{
            backgroundColor: '#FFFFFF',
            display: { sx: 'block', md: 'block' },
         }} xs={false} sm={4} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              {'First step'}
            </Typography>
            <Typography  component="h1" variant="h4" >
            {'Create your passport'}
            </Typography>

            <Box id="box" sx={{ m: 1, mt: 1, bgcolor: 'white',fontFamily: 'Montserrat Regular' }} component="form" noValidate onSubmit={handleSubmit} >
              <div className='marge'></div>
              <TextField
                margin="normal"
                id="username"
                label="username"
                name="username"
                type="text"

                autoComplete="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoFocus
              />
              <div className='marge'></div>

              <TextField
                id="walletreceveir"
                name="walletReceveir"
                label="External non-metamask wallet receveir"
                type="bytes32"
                autoComplete="External (non-metamask) Avax Wallet "
                value={walletReceiver}
                onChange={(event) => setWalletReceiver(event.target.value)}
              />
              <div className='margecontrol'></div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Accept the DAO system"
              />
              <div className='margecontrol2'></div>
                <Link variant="body2">
                    Read lite paper 
                </Link>
            <Box sx={{
                width: '80%',
                display: { sx: 'flex', md: 'flex', lg: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',}} xs={3}>

              <LoadingButton
                //onClick={(e) => metamaskConnectTWRLD(e)}
                loading={loading}
                loadingIndicator="Loading..."
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml:5, bgcolor: 'black',fontFamily: 'Montserrat Bold',textTransform: 'capitalize', }}
                //onClick={(e) => Confirm(e)}
              >
                <Link href="/getPassport" sx={{ color: 'white', }}>
                  {loading ? 'Loading...' : 'Get TWRLD'}
                </Link>
              </LoadingButton>
              
                <LoadingButton
                    onClick={() => handleSubmit()}  
                    loading={loading}
                    disabled={isSaving}
                    loadingIndicator="Loading..."
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml:5, bgcolor: 'black',fontFamily: 'Montserrat Bold',textTransform: 'capitalize', }}
                    //onClick={(e) => Confirm(e)}
                      >
                    <Link href="/getPassport" sx={{ color: 'white', }}>
                      {loading ? 'Loading...' : 'Get passport'}
                    </Link>
                </LoadingButton>



              <LoadingButton
                // onClick={}
                loading={loading}
                loadingIndicator="Loading..."
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml:5, bgcolor: 'black',fontFamily: 'Montserrat Bold',textTransform: 'capitalize', }}
                //onClick={(e) => Confirm(e)}
              >
                <Link href="/havePassport" sx={{ color: 'white', }}>
                  {loading ? 'Loading...' : 'Have passport'}
                </Link>
              </LoadingButton>
            </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}