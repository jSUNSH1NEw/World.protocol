import React from "react";

// COMPONENTS IMPORT
import Sidebar from "./components/Sidebar/index.js";


// CSS STYLES ROOT OVERRIDE


function Dashboard() {
    return (
        <div className="app-root">
            <Sidebar />
        </div>
    );
}

export default Dashboard;