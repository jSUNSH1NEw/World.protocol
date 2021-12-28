import * as React from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer,IconButton, List, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails, Button} from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WRLDIcon from "../../../../assets/icon/coin.png";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Sidebar = (
        <div className='Sidebar'>
            <Toolbar />
            <img className='logos' src={WRLDIcon} />   
            <List>
            <Button>
                    <Link to="/app/dashboard">
                        <Typography>Dashboard</Typography>
                    </Link>
            </Button>
            </List>

            <Divider />
            <List>
            <Button>
                    <Link to="/app/Calculator">
                        <Typography>Calculator</Typography>
                    </Link>
            </Button>
            </List>
            <Divider />
            <List>
                <Button>
                    <Link to="/app/Stake">
                        <Typography>Stake</Typography>
                    </Link>
                </Button>
            </List>
            <Divider />
            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Mint</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Link to="/app/mint/wavelp">
                        <Typography>wAVE / WRLD </Typography>
                    </Link>
                    </AccordionDetails>
                </Accordion>
            </List>

            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Documentations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link to=""> 
                        <Typography>
                            Gitbooks
                        </Typography>
                        </Link>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Link to=""> 
                        <Typography>
                            Our github readme
                        </Typography>
                        </Link>
                    </AccordionDetails>
                </Accordion>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'rgba(255,255,255,0.0) ',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open Sidebar"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'black'}} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div"
                    sx={{ color:'black' }}>
                        Your Dashboard 
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {Sidebar}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {Sidebar}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    TRIMED APY LIKLE FOOTER 
                </Typography>
                <Typography paragraph>
                    THERE IS THE COMPONENT SWITCHING BY ROOT ! 
                </Typography>
            </Box>
        </Box>
    );
}


export default ResponsiveDrawer;