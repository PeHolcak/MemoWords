import React from 'react';
import styled from 'styled-components';

const TabletDiv = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TabletOnlyDown: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TabletDiv>{children}</TabletDiv>;
};

export default TabletOnlyDown;