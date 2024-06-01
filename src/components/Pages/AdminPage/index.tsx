import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useMediaQuery } from '@mui/material';
import {
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Content = styled(motion.main)`
  flex-grow: 1;
  padding: 20px;
  margin-left: 240px;
`;

const DrawerStyled = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
    background-color: #333;
    color: white;
  }
`;

const MenuButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
`;

const AdminPage: NextPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      {isMobile && (
        <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </MenuButton>
      )}
      <DrawerStyled
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? isDrawerOpen : true}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </DrawerStyled>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, Admin!
        </Typography>
        <Typography paragraph>
          This is your admin dashboard where you can manage the application.
        </Typography>
      </Content>
    </Container>
  );
};

export default AdminPage;
