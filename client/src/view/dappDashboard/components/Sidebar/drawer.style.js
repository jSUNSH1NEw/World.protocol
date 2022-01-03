// styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from '../../styleHook';


  
  

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 70px;


    @media ${device.mobileS} {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
    }
`;

export const StyledImg = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: 70px;
    margin-bottom: 40px;
`;


export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;