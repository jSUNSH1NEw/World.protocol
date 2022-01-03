import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontWeight: 'bold' }}
          align="right"
          variant="body2"
          color="white"
        >
          December 2021
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='grey' variant="outlined">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '75px', px: 2, color:'white' }}>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold'}}>
            Phase 1
            </Typography>
            <Typography>
             Entry in the Moralis/Avax hackathon And start the devlopment
            </Typography>
        </TimelineContent>

      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          January 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="grey" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', px: 2, color:'white' }}>
          <Typography variant="h6" component="span" sx={{ color:'#487C89', fontWeight: 'bold' }}>
          Phase 2
          </Typography>
          <Typography>Launch the token and launch the dapps into avalanche</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          February 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="grey" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', px: 2, color: 'white' }}>
          <Typography variant="h6" component="span" sx={{ color:'#487C89', fontWeight: 'bold' }}>
          Phase 3
          </Typography>
          <Typography>Acquire funds for auditing with hacken Wrlderc20, wAVEerc20 and bond depot architecture </Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          March 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
          <TimelineDot color="grey" variant="outlined">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', px: 2, color:'white', width:'250px', border:'red'}}>
          <Typography variant="h6" component="span" sx={{ color:'#487C89', fontWeight: 'bold' }}>
          Phase 4
          </Typography>
          <Typography>Get audited and being ready to launch into the Avalanche mainnet</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}