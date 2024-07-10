import styled from 'styled-components';
import { Typography } from '@mui/material';

export const SidebarWrapper = styled.div`
  height: 100dvh;
  width: 15rem;

  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: ${({ theme }) => theme.colors.menuBackground};
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;

  aspect-ratio: 1;
`;

export const SideBarItemsWrap = styled.div`
  margin-top: 12px;
  flex: 1;

  width: 100%;
`;

export const AboutApplication = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  background: ${({ theme }) => theme.colors.alpha};
`;

export const AplicationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 1rem;
`;
