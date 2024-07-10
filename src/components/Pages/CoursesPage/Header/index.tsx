// pages/index.tsx
import * as React from 'react';
import {
  Grid,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  ButtonGroup,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { motion } from 'framer-motion';

import SearchBar from './SearchBar';
import CourseList from './CourseList';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Header: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        height={'10rem'}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant="h4">Courses</Typography>
      </Box>
      <Box justifyContent="center" alignItems="center" display="flex">
        <SearchBar />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <FilterListIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="All" />
            <Tab label="Published" />
            <Tab label="Draft" />
            <Tab label="Archived" />
          </Tabs>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <ButtonGroup variant="contained">
              <Button>Recency</Button>
              <Button>Alphabetically</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, x: 100 }}
      >
        <TabPanel value={value} index={0}>
          All Courses
          <CourseList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Published Courses
        </TabPanel>
        <TabPanel value={value} index={2}>
          Draft Courses
        </TabPanel>
        <TabPanel value={value} index={3}>
          Archived Courses
        </TabPanel>
      </motion.div>
    </Box>
  );
};

export default Header;
