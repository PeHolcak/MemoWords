// TabsComponent.tsx
import React from 'react';
import styled from 'styled-components';
import { Box, Tabs, Tab as MuiTab, Typography } from '@mui/material';
import TabPanel from './TabPanel';

const Tab = styled(MuiTab)`
  /* Přidejte přizpůsobené styly pro Tab zde, pokud potřebujete */
`;

interface TabData {
  label: string;
  content: string;
}

const tabsData: TabData[] = [
  { label: "Tab 1", content: "Content for tab 1" },
  { label: "Tab 2", content: "Content for tab 2" },
  { label: "Tab 3", content: "Content for tab 3" },
  // Přidávejte další záložky podle potřeby
];

const TabsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabsData.map((tab, index) => (
            <Tab label={tab.label} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} key={index} />
          ))}
        </Tabs>
      </Box>
      {tabsData.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Typography>{tab.content}</Typography>
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabsComponent;