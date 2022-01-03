import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar, Typography } from "@mui/material";
// COMPONENTS IMPORT
import Sidebar from "./components/Sidebar/index.js";
const drawerWidth = 240;

// CSS STYLES ROOT OVERRIDE


function Dashboard() {
    return (
        <div className="rooted-dash">
            <Sidebar />
            <div className="app-root">
                <Routes>
                    <Route path="/app/*" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;