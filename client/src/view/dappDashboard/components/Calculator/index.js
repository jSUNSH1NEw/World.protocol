import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography, Grid, InputAdornment, OutlinedInput, Zoom, Slider } from "@mui/material";
// COMPONENTS IMPORT

import { StyledDiv } from './calculator.styles';

const drawerWidth = 240;







function Calculator() {
    return (
        <StyledDiv>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }}} // Main content need to be changed based on the component you want to render
            >
                            <Zoom in={true}>
                <div className="calculator-card">
                    <Grid className="calculator-card-grid" container direction="column" spacing={2}>
                        <Grid item>
                            <div className="calculator-card-header">
                                <p className="calculator-card-header-title">Calculator</p>
                                <p className="calculator-card-header-subtitle">Estimate your returns</p>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="calculator-card-metrics">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <div className="calculator-card-apy">
                                            <p className="calculator-card-metrics-title">WRLD Price</p>
                                            <p className="calculator-card-metrics-value"></p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={4} md={4} lg={4}>
                                        <div className="calculator-card-tvl">
                                            <p className="calculator-card-metrics-title">Current APY</p>
                                            <p className="calculator-card-metrics-value">
                                            
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={4} md={4} lg={4}>
                                        <div className="calculator-card-index">
                                            <p className="calculator-card-metrics-title">Your wAVE Balance</p>
                                            <p className="calculator-card-metrics-value"></p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                        <div className="calculator-card-area">
                            <div>
                                <div className="calculator-card-action-area">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="calculator-card-action-area-inp-wrap">
                                                <p className="calculator-card-action-area-inp-wrap-title">wAVE Amount</p>
                                                <OutlinedInput
                                                    type="number"
                                                    placeholder="Amount"
                                                    className="calculator-card-action-input"
                                                    labelWidth={0}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className="stake-card-action-input-btn">
                                                                <p>Max</p>
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="calculator-card-action-area-inp-wrap">
                                                <p className="calculator-card-action-area-inp-wrap-title">APY (%)</p>
                                                <OutlinedInput
                                                    type="number"
                                                    placeholder="Amount"
                                                    className="calculator-card-action-input"
                                                    labelWidth={0}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className="stake-card-action-input-btn">
                                                                <p>Current</p>
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="calculator-card-action-area-inp-wrap">
                                                <p className="calculator-card-action-area-inp-wrap-title">WRLD price at purchase ($)</p>
                                                <OutlinedInput
                                                    type="number"
                                                    placeholder="Amount"
                                                    className="calculator-card-action-input"
                                                    labelWidth={0}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className="stake-card-action-input-btn">
                                                                <p>Current</p>
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="calculator-card-action-area-inp-wrap">
                                                <p className="calculator-card-action-area-inp-wrap-title">Future WRLD market price ($)</p>
                                                <OutlinedInput
                                                    type="number"
                                                    placeholder="Amount"
                                                    className="calculator-card-action-input"
                                                    labelWidth={0}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className="stake-card-action-input-btn">
                                                                <p>Current</p>
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="calculator-days-slider-wrap">
                                    <p className="calculator-days-slider-wrap-title"></p>
                                    <Slider className="calculator-days-slider" min={1} max={365} />
                                </div>
                                <div className="calculator-user-data">
                                    <div className="data-row">
                                        <p className="data-row-name">Your initial investment</p>
                                        <p className="data-row-value"></p>
                                    </div>
                                    <div className="data-row">
                                        <p className="data-row-name">Current wealth</p>
                                        <p className="data-row-value"></p>
                                    </div>
                                    <div className="data-row">
                                        <p className="data-row-name">TIME rewards estimation</p>
                                        <p className="data-row-value"></p>
                                    </div>
                                    <div className="data-row">
                                        <p className="data-row-name">Potential return</p>
                                        <p className="data-row-value"></p>
                                    </div>
                                    <div className="data-row">
                                        <p className="data-row-name">Potential number of lambos</p>
                                        <p className="data-row-value"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </Zoom>
            </Box>

            <Routes>
                <Route path=":id" element={<Calculator/>} />
            </Routes>
        </StyledDiv>
    );
}

export default Calculator;