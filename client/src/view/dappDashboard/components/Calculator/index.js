import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
// COMPONENTS IMPORT

const drawerWidth = 240;

// CSS STYLES ROOT OVERRIDE


function Calculator() {
    return (
        <div>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }}} // Main content need to be changed based on the component you want to render
            >
                <Typography paragraph>
                    calculator COMPONENT
                </Typography>
            </Box>

            <Routes>
                <Route path=":id" element={<Calculator/>} />
            </Routes>
        </div>
    );
}

export default Calculator;