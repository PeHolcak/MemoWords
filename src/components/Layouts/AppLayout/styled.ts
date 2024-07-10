import styled from 'styled-components';

import { AppLayoutProps } from './';

type ChildrenWrapperProps = {
  alignChildren: AppLayoutProps['alignChildren'];
};

export const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: ${({ alignChildren }) => alignChildren};
  flex: 1;

  min-height: calc(100dvh - 50px - 50px - 150px);

  position: relative;
`;

export const ChildrenContainer = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  min-height: 100dvh;

  margin-bottom: 8rem;
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
