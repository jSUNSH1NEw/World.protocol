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
      <TimelineItem sx={{ marginLeft: '1px'}}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontWeight: 'bold' }}
          align="right"
          variant="title"
          color="white"
        >
           Phase 1 | Moralis/Avax hackathon
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='grey' variant="outlined">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '70px',color:'white' }}>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold'}}>
            November 2021
            </Typography>
            <Typography sx={{ marginTop: '7px'}}>
             start the development and the design of World.protocol
            </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="title"
          color="white"
        >
          Phase 2 | Development 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="grey" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', color:'white' }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            December 2021 
          </Typography>
          <Typography sx={{ marginTop: '7px'}}>Creation of the TWRLD locked treasury with NFT passport authentification system</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="title"
          color="white"
        >
          Phase 3 | Research VC funds  
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="grey" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', marginLeft: '-2px', color: 'white' }}>
          <Typography variant="h6" component="span" sx={{ color:'#487C89', fontWeight: 'bold' }}>
          January 2022
          </Typography>
          <Typography sx={{ marginTop: '7px'}} >Acquire funds for auditing Wrlderc20, wAVEerc20 and locked bond depot architecture  before deployment into Avalanche main-net</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="title"
          color="white"
        >
          Phase 4 | Deployment
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
          <TimelineDot color="grey" variant="outlined">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '75px', marginLeft: '1px', color:'white', width:'250px', border:'red'}}>
          <Typography variant="h6" component="span" sx={{ color:'#487C89', fontWeight: 'bold' }}>
          March 2022
          </Typography>
          <Typography sx={{ marginTop: '7px'}}>World.Protocol officialy deployed into mainet + public sales</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}