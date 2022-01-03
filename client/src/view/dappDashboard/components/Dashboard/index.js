import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
// COMPONENTS IMPORT
import { StyledDiv } from './dash.styles';


const drawerWidth = 240;





function XDashboard() {
    return (
        <StyledDiv>
            <Box
                className="dashboard-container"
                component="main1" // Main content need to be changed based on the component you want to render
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
                <Typography paragraph>
                    trimed coin  
                </Typography>
            </Box>

            <Box
                className="dashboard-container2"
                component="main2" 
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
                <Typography paragraph>
                    trimed treasury  
                </Typography>
            </Box>

            <Box
                className="dashboard-container3"
                component="main3" 
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >   
                <Box
                sx={{width: '200px', height :'100px' , backgroundColor: 'whiteSmoke'}}
                >
                    <Typography paragraph >
                        trimed apy
                    </Typography>
                </Box>
            </Box>


            <Routes>
                <Route path=":id" element={<XDashboard/>} />
            </Routes>
        </StyledDiv>
    );
}

export default XDashboard;