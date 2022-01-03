import React from "react";

// COMPONENTS IMPORT
import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Background from "./components/Background/index.js";
import Footer from "./components/Footer/index.js";

import styled from "styled-components";

const StyledDiv = styled.div`
width: 100%;
background: rgb(0, 0, 0);
display: flex;
flex-direction: column;
`;


function Landing() {
    return (
        <StyledDiv>
            <Header />
            <Main />
            <Background />
            <Footer />
        </StyledDiv>
    );
}

export default Landing;