import styled from "styled-components";



export const LandingBack = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    @media screen and (max-width: 1200px) {
            display: none;
    }
`;

export const LandingBackBlob = styled.div`
    position: fixed;
    right: -0px;
    opacity: 0.4;
    z-index: 0;
`;
export const LandingBlobImg = styled.img`
    width: 784px;
    height: 897px;
    z-index: 0;
`;

