import * as React from 'react';
import { Button,Grid,CssBaseline,Link,Paper,Box,Typography,createTheme, ThemeProvider} from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import WRLDLogo  from "./../../assets/icon/LogoDesigne.png";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        World.protocol
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {' For (USERNAME)'}
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
            <Grid container> 
            <img className='logo' src={WRLDLogo} alt="Logo of world" />   
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
              fontFamily: 'Montserrat Regular'
            }}
          >
            <Typography  component="h1" variant="h5">
              NFT AUTH CONTRACT
            </Typography>
            <Typography component="h1" variant="h5">
             BY WRLD FOR 
            </Typography>
            <Box  id="box" sx={{ m: 1, bgcolor: 'white' }} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'black', }}
              >
                <LoadingButton
                onClick={handleClick}
                loading={loading}
                loadingIndicator="Loading..."
                >
                <Link href="/app">
                  Buy and print your contract
                </Link>
                </LoadingButton>
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}