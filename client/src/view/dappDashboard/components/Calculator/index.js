import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar, Typography } from "@mui/material";
// COMPONENTS IMPORT

const drawerWidth = 240;

// CSS STYLES ROOT OVERRIDE


function Calculator() {
    return (
        <div className="Calculator-root">
            <Box
                component="main" // Main content need to be changed based on the component you want to render
            >
                <Typography paragraph>
                    calculator COMPONENT
                </Typography>
            </Box>


            <Box
                component="main" // Main content need to be changed based on the component you want to render
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
            >
            </Box>

            <Routes>
                <Route path=":id" element={<Calculator/>} />
            </Routes>
        </div>
    );
}

export default Calculator;