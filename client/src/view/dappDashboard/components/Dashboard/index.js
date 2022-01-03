import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar, Typography } from "@mui/material";
// COMPONENTS IMPORT

// CSS STYLES ROOT OVERRIDE

const drawerWidth = 240;





function XDashboard() {
    return (
        <div>
            <Box
                component="main1" // Main content need to be changed based on the component you want to render
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
                <Typography paragraph>
                    trimed coin  
                </Typography>
            </Box>

            <Box
                component="main2" 
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
                <Typography paragraph>
                    trimed treasury  
                </Typography>
            </Box>
            <Box
                component="main3" 
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
                <Typography paragraph sx= {{ width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                    trimed apy
                </Typography>
            </Box>


            <Routes>
                <Route path=":id" element={<XDashboard/>} />
            </Routes>
        </div>
    );
}

export default XDashboard;