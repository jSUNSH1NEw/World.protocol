import * as React from 'react';
import { CssBaseline,TextField,FormControlLabel,Checkbox,Paper ,Box,Button, Grid, Typography, createTheme, ThemeProvider,Link } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { PositionedSnackbar, PositionedSnackbar2 } from './entry.styles.js'
import { CreateUser } from '../../store/model/user.model.js';

import './entry.css';
import WRLDLogo  from "./../../assets/icon/LogoDesigne.png";
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
  const [loading, setLoading] = React.useState(false);
  
  function handleClick() {
    setLoading(true);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      walletReceveir: data.get('walletReceveir'),
    });

    const SaveDaoUsers = ( username, walletReceiver) => {
      return CreateUser.CreateDaoUsers.save({
        username: username,
        walletReceveir: walletReceiver,
        date: new Date(),
      })
    }
    // const { error, isUploading, moralisFile ,saveFile } = useMoralisFile();
    // saveFile(
      // "username",
      // "walletReceveir",
      // files,
      // {
        // saveIPFS: true,
        // saveMoralis: true,
      // }
    // );
  };

  const { isAuthenticated, chainId } = useMoralis();
  const { native } = useMoralisWeb3Api();

  
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
            <PositionedSnackbar />
            <Grid container> 
            <img className='logo' src={WRLDLogo} alt="Logo of world protocol" />   
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
            }}
          >
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              {'First step'}
            </Typography>
            <Typography  component="h1" variant="h4" >
            {'Create your passport'}
            </Typography>

            <Box id="box" sx={{ m: 1, bgcolor: 'white',fontFamily: 'Montserrat Regular' }} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              <div className='margecontrol2'></div>
                <Link variant="body2">
                    Read lite paper 
                </Link>
            <Box sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',}}>
                <LoadingButton
                onClick={handleClick}
                loading={loading}
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
                onClick={handleClick}
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