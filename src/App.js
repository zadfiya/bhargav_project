import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Tabs, Tab, Container, Typography, Box, useScrollTrigger } from '@mui/material';
import OverviewSection from './Component/Overview';
import TrackRecordSection from './Component/Trackrecord';
import TrackRecordBoxSection from './Component/TrackRecordBox';

function App() {
  const [value, setValue] = useState(0);
  const sectionsRef = useRef({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const elementId = getTabElementId(newValue);
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getTabElementId = (index) => {
    const tabs = ['overview', 'track-record', 'investment-strategy', 'esg', 'impact-invest', 'team'];
    return tabs[index];
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const index = getTabIndex(sectionId);
            setValue(index);
          }
        });
      },
      {
        rootMargin: '-20% 0px -79% 0px',
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const getTabIndex = (sectionId) => {
    const tabs = ['overview', 'track-record', 'investment-strategy', 'esg', 'impact-invest', 'team'];
    return tabs.indexOf(sectionId);
  };

  return (
    <div>
      {/* Banner */}
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Your Banner Here
        </Typography>
      </Container>

      {/* Tabs */}
      <AppBar position={trigger ? 'fixed' : 'static'} color="default">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" />
          <Tab label="Track Record" />
          <Tab label="Investment Strategy" />
          <Tab label="ESG" />
          <Tab label="Impact Invest" />
          <Tab label="Team" />
        </Tabs>
      </AppBar>

      <Container>
        <Box ref={(el) => (sectionsRef.current['overview'] = el)} id="overview" my={4}>
          <OverviewSection/>
          
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box ref={(el) => (sectionsRef.current['track-record'] = el)} id="track-record" my={4}>
          <Typography variant="h4">Track Record</Typography>
          <TrackRecordSection/>
          <Typography>Track record content here.</Typography>
          <TrackRecordBoxSection title="Interview With CEO"/>
          <TrackRecordBoxSection title ="Company show Reel"/>
        </Box>

        <Box ref={(el) => (sectionsRef.current['investment-strategy'] = el)} id="investment-strategy" my={4}>
          <Typography variant="h4">Investment strategy</Typography>
          <Typography>Overview content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box ref={(el) => (sectionsRef.current['esg'] = el)} id="esg" my={4}>
          <Typography variant="h4">esg and impact</Typography>
          <Typography>Overview content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box ref={(el) => (sectionsRef.current['impact-invest'] = el)} id="impact-invest" my={4}>
          <Typography variant="h4">impact invest</Typography>
          <Typography>Track record content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        <Box ref={(el) => (sectionsRef.current['team'] = el)} id="team" my={4}>
          <Typography variant="h4">Team</Typography>
          <Typography>Track record content here.</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </Box>

        {/* Add other sections similarly */}
      </Container>
    </div>
  );
}

export default App;
