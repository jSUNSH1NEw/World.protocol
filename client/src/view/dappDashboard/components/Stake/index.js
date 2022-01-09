import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography, Grid, InputAdornment, OutlinedInput, Zoom } from "@mui/material";
// COMPONENTS IMPORT
import { StyledDiv } from './stake.styles';

const drawerWidth = 240;
//<RebaseTimer />


function Staking() {
    return (
        <StyledDiv>
            <Zoom in={true}>
                <div className="stake-card">
                    <Grid className="stake-card-grid" container direction="column" spacing={2}>
                        <Grid item>
                            <div className="stake-card-header">
                                <p className="stake-card-header-title">WRLD Staking (🌍,🌊)</p>
                                
                            </div>
                        </Grid>

                        <Grid item>
                            <div className="stake-card-metrics">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <div className="stake-card-apy">
                                            <p className="stake-card-metrics-title">APY</p>
                                            <p className="stake-card-metrics-value">
                                                
                                            </p>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={4} lg={4}>
                                        <div className="stake-card-tvl">
                                            <p className="stake-card-metrics-title">TVL</p>
                                            <p className="stake-card-metrics-value">

                                            </p>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={4} lg={4}>
                                        <div className="stake-card-index">
                                            <p className="stake-card-metrics-title">Current Index</p>
                                            <p className="stake-card-metrics-value"></p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                        <div className="stake-card-area">
                         
                                <div className="stake-card-wallet-notification">
                                    <div className="stake-card-wallet-connect-btn">
                                        <p>Connect Wallet</p>
                                    </div>
                                    <p className="stake-card-wallet-desc-text">Connect your AVAX wallet to stake WRLD tokens!</p>
                                </div>
                      
                                <div>
                                    <div className="stake-card-action-area">
                                        <div className="stake-card-action-stage-btns-wrap">
                                            <div >
                                                <p>Stake</p>
                                            </div>
                                            <div >
                                                <p>Unstake</p>
                                            </div>
                                        </div>

                                        <div className="stake-card-action-row">
                                            <OutlinedInput
                                                type="number"
                                                placeholder="Amount"
                                                className="stake-card-action-input"
                                                labelWidth={0}
                                            />

                                           
                                                <div className="stake-card-tab-panel">
                                                    
                                                        <div className="stake-card-tab-panel-btn">
                                                            <p></p>
                                                        </div>
                                                
                                                        <div className="stake-card-tab-panel-btn">
                                                            <p></p>
                                                        </div>
                                                 
                                                </div>
                                        

                                       
                                                <div className="stake-card-tab-panel">
                                                  
                                                        <div
                                                            className="stake-card-tab-panel-btn"
                                                        >
                                                            <p></p>
                                                        </div>
                                              
                                                        <div
                                                            className="stake-card-tab-panel-btn"
                                                        >
                                                            <p></p>
                                                        </div>
                                  
                                                </div>
                              
                                        </div>

                                        <div className="stake-card-action-help-text">

                                        </div>
                                    </div>

                                    <div className="stake-user-data">
                                        <div className="data-row">
                                            <p className="data-row-name">Your Balance</p>
                                            <p className="data-row-value"></p>
                                        </div>

                                        <div className="data-row">
                                            <p className="data-row-name">Your Staked Balance</p>
                                            <p className="data-row-value"></p>
                                        </div>

                                        <div className="data-row">
                                            <p className="data-row-name">Next Reward Amount</p>
                                            <p className="data-row-value"></p>
                                        </div>

                                        <div className="data-row">
                                            <p className="data-row-name">Next Reward Yield</p>
                                            <p className="data-row-value"></p>
                                        </div>

                                        <div className="data-row">
                                            <p className="data-row-name">ROI (5-Day Rate)</p>
                                            <p className="data-row-value"></p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </Grid>
                </div>
            </Zoom>


            <Routes>
                <Route path=":id" element={<Staking/>} />
            </Routes>
        </StyledDiv>
    );
}

export default Staking;