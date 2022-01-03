import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
// COMPONENTS IMPORT
import { StyledDiv } from './stake.styles';

const drawerWidth = 240;



function Staking() {
    return (
        <StyledDiv>
            <Box
                component="main" // Main content need to be changed based on the component you want to render
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
               <Box
               sx={{ flexGrow: 1, p: 2, width: '250px', height :'100px'}}
               >
                    <Typography paragraph>
                        Staking COMPONENT
                    </Typography>
                </Box> 
            </Box>


            <Routes>
                <Route path=":id" element={<Staking/>} />
            </Routes>
        </StyledDiv>
    );
}

export default Staking;