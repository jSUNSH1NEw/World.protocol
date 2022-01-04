import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";


// this is for mediaquery managment
  export const size = {
    width: 240,
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    drawerWidth: `(min-width: ${size.width})`
  };


    // GSAP animation TESTING

  // store a reference to the box div
 // const boxRef = useRef();
  // wait until DOM has been rendered
 // useEffect(() => {
   // gsap.to(boxRef.current, { rotation: "+=360" });
  //});
  // with this  <div className="box" ref={boxRef}>Hello</div> <!--- 


  //Styled Components MUI