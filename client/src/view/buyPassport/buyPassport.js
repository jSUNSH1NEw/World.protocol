import * as React from 'react';
import { Button,Grid,CssBaseline,Link,Paper,Box,Typography,createTheme, ThemeProvider} from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import WRLDLogo  from "./../../assets/icon/LogoDesigne.png";
import { useChain, useMoralis, useMoralisFile, useMoralisWeb3Api, useMoralisWeb3ApiCall } from 'react-moralis';


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
  const { chainId } = useChain();
  const { isAuthenticated } = useMoralis();

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
            <Grid container sx={{justifyContent:'center', marginTop:'10px'}}> 
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
            <Typography  component="h1" variant='h5'>
              Second !
            </Typography>
            <Typography component="h1" variant='h5'>
             Mint your entry-ticket
            </Typography>

            <Box id="box" component="form"sx={{
                width: '100px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                }}> 
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
                <Link href="/app" sx={{ color: 'white', }}>
                  {loading ? 'Minting...' : 'Mint passport'}
                </Link>
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}