import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { SidebarStyled } from './styled';

type SideBarProps = {
  isMobile: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SideBar: React.FC<SideBarProps> = ({
  isMobile,
  isSidebarOpen,
  toggleSidebar
}) => {
  return (
    <SidebarStyled
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? isSidebarOpen : true}
      onClose={toggleSidebar}
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
    </SidebarStyled>
  );
};

export default SideBar;
