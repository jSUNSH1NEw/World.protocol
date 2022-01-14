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
            <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                   <Item>Total stacked</Item>
                   <TrimItem> 
                      {/*Trim stacked*/ }Trim Stacked
                   </TrimItem>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                   <Item >Treasury</Item>
                   <TrimItem> 
                      {/*Trim treasury*/ }Trim Treasury
                   </TrimItem>
                   <Item >Locked Treasury</Item>
                   <TrimItem> 
                      {/*Trim treasury*/ }Trim Locked TWRLD
                   </TrimItem>
                </Grid>
  

                <Grid item xs={12} sm={4} md={4} lg={4}>
                   <Item>Current APY</Item>
                   <TrimItem> 
                      {/*Trim APY*/ }Trim APY
                   </TrimItem>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;