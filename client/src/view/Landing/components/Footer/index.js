import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from "@mui/material";

//Import for trim  ipfs data 
//import redux 
//import { IReduxState } from "../../../../store/slices/state.interface";
//import { trim } from "../../../../helpers";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: "white",
  backgroundColor: "black",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "18px",
  lineHeight: "22px",
  marginTop: "100px",
  marginBottom: "4px",

}));

const TrimItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: "white",
    backgroundColor: "black",
    fontFamily: "Montserrat Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "150px",
}));

function Footer() {
    //const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    //const stakingAPY = useSelector<IReduxState, number>(state => {
      //  return state.app.stakingAPY;
    //});
    //const treasuryBalance = useSelector<IReduxState, number>(state => {
      //  return state.app.treasuryBalance;
    //});
    //const circSupply = useSelector<IReduxState, number>(state => {
      //  return state.app.circSupply;
    //});

    //const trimmedStakingAPY = trim(stakingAPY * 100, 1);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} columns={16}>
               <Grid item xs={8} sm={8} md={4} lg={4}>
                   <Item>Total WRLD stacked</Item>
                   <TrimItem> 
                      {/*Trim stacked*/ }0.00
                   </TrimItem>
               </Grid>

               <Grid item xs={8} sm={8} md={4} lg={4}>
                   <Item >WRLD Treasury</Item>
                   <TrimItem> 
                      {/*Trim treasury*/ }0.00
                   </TrimItem>
               </Grid>
               
               <Grid item xs={8} sm={8} md={4} lg={4}>
                   <Item >Locked TWRLD Treasury</Item>
                   <TrimItem> 
                      {/*Trim treasury*/ }0.00
                   </TrimItem>
                </Grid>
  

                <Grid item xs={8} sm={8} md={4} lg={4}>
                   <Item>Current APY</Item>
                   <TrimItem> 
                      {/*Trim APY*/ }11 113 558 %
                   </TrimItem>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;