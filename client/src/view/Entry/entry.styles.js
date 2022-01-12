import * as React from 'react';
import { Snackbar } from '@mui/material/';


export const PositionedSnackbar = (props) => {
    const [state, setState] = React.useState({
      open: true,
      vertical: 'top',
      horizontal: 'left',
      messages: 'System used for stop metamask hijack / scam / phishing',
    });
  
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={state.open}
        autoHideDuration={1000000}
        onClose={() => setState({ ...state, open: false })}
        message={state.messages}
        >
        </Snackbar>
    );
  }
  
  export const PositionedSnackbar2 = (props) => {
    const [state, setState] = React.useState({
      open: true,
      vertical: 'top',
      horizontal: 'left',
      messages2: 'Please refer a non-metamask wallet for the Wallet-receveir input'
    });
  
    return (
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={state.open}
        autoHideDuration={1000000}
        onClose={() => setState({ ...state, open: false })}
        message={state.messages2}
        >
        </Snackbar>  
    );
  }