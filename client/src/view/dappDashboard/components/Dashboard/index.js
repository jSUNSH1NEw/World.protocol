import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography, Zoom, Grid } from "@mui/material";
// COMPONENTS IMPORT
import { StyledDiv } from './dash.styles';


const drawerWidth = 240;



//const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    //const app = useSelector<IReduxState, IAppSlice>(state => state.app);

    //const trimmedStakingAPY = trim(app.stakingAPY * 100, 1);


function XDashboard() {
    return (
        <StyledDiv>
            <Box className="dashboard-infos-wrap" 
            sx={{flexGrow: 0 , width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                <Zoom in={true}>
                    <Grid container spacing={5} >
                        <Grid item lg={5} mr={2} mt={5} md={6} sm={6} xs={12} sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', width: '50px', marginBottom: '20px'}} >
                            <Box>
                                <p className="card-title">WRLD PRICE</p>
                                <p className="card-value"></p>
                            </Box>
                        </Grid>

                        <Grid item lg={5} md={6} mt={5} sm={6} xs={12} sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">Market Cap</p>
                                <p className="card-value">
                                    
                                </p>
                            </div>
                        </Grid>



                        <Grid item lg={5} mr={2} md={6} sm={6} xs={12}  sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">TVL</p>
                                <p className="card-value">
                                    
                                </p>
                            </div>
                        </Grid>

                        <Grid item lg={5} mr={2} md={6} sm={6} xs={12}  sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">APY</p>
                                <p className="card-value"></p>
                            </div>
                        </Grid>

                        <Grid item lg={5} mr={2} md={6} sm={6} xs={12}  sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">Current Index</p>
                                <p className="card-value"></p>
                            </div>
                        </Grid>

                        <Grid item lg={5}  md={6} sm={6} xs={12}  sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">Treasury Balance</p>
                                <p className="card-value">

                                </p>
                            </div>
                        </Grid>

                        <Grid item lg={5} mr={2} md={6} sm={6} xs={12}  sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white', marginBottom: '20px'}}>
                            <div className="dashboard-card">
                                <p className="card-title">Backing per $WRLD</p>
                                <p className="card-value">
                                   
                                </p>
                            </div>
                        </Grid>

                        <Grid item lg={5} md={2} sm={2} xs={12} sx={{backgroundColor: 'black', borderRadius: '7px', color: 'white'}}>
                            <div className="dashboard-card">
                                <p className="card-title">Runway</p>
                                <p className="card-value"></p>
                            </div>
                        </Grid>
                    </Grid>
                </Zoom>
            </Box>


            <Routes>
                <Route path=":id" element={<XDashboard/>} />
            </Routes>
        </StyledDiv>
    );
}

export default XDashboard;