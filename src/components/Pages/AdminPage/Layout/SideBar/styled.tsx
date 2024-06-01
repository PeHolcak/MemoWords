import styled from 'styled-components';

import { Drawer } from '@mui/material';

export const SidebarStyled = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  & .MuiSidebar-paper {
    width: 240px;
    box-sizing: border-box;
    background-color: #333;
    color: white;
  }
`;
