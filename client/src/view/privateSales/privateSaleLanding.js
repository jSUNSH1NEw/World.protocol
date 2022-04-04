import React from "react";

// COMPONENTS IMPORT
import Header from "./Components/Header/index.js.js.js";
import Main from "./Components/Main/index.js.js.js";
import Background from "./Components/Background/index.js.js.js";
import Footer from "./Components/Footer/index.js.js.js";

import styled from "styled-components";

const StyledDiv = styled.div`
width: 100%;
background: rgb(0, 0, 0);
display: flex;
flex-direction: column;
`;


function privateSaleLanding() {
    return (
        <StyledDiv>
            <Header />
            <Main />
            <Background />
            <Footer />
        </StyledDiv>
    );
}

export default privateSaleLanding;  