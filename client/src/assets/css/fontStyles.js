import { createGlobalStyle } from "styled-components";
import MontserratR from "../fonts/Monts/Montserrat-Regular.ttf";
import MontserratB from "../fonts/Monts/Montserrat-Bold.ttf";


const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${MontserratR}) format('truetype');
}
@font-face {
  font-family: 'Roboto Condensed';
  src: url(${MontserratB}) format('truetype');
}

`;


export default FontStyles;
