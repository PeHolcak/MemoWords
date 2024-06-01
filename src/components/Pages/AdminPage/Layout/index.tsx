import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import * as S from './styled';
import SideBar from './SideBar';

const AdminPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <S.Container>
      {isMobile ? (
        <S.MenuButton edge="start" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </S.MenuButton>
      ) : null}
      <SideBar
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <S.Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </S.Content>
    </S.Container>
  );
};

export default AdminPage;
