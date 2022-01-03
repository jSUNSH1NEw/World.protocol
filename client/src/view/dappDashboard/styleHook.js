import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";

// this is for mediaquery managment
  const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

  export const drawerWidth = 240;


  // CSS rules over styled with MUI 
export const Linked = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  fontFamily: 'Montserrat Bold',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '15px',
  lineHeight: '22px',
  color:'rgb(0, 0, 0)',
}));


    // GSAP animation TESTING

  // store a reference to the box div
 // const boxRef = useRef();
  // wait until DOM has been rendered
 // useEffect(() => {
   // gsap.to(boxRef.current, { rotation: "+=360" });
  //});
  // with this  <div className="box" ref={boxRef}>Hello</div> <!--- 

