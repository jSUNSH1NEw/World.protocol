import React from "react";
import { Routes, Route } from 'react-router-dom';
// COMPONENTS IMPORT
import Sidebar from "./components/Sidebar/index.js";

// CSS STYLES ROOT OVERRIDE


function Dashboard() {
    return (
        <div>
            <Sidebar />
            <div>
                <Routes>
                    <Route path="/app/*" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;