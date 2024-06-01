import React from 'react';
import styled from 'styled-components';

const TabletDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TabletOnlyUp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TabletDiv>{children}</TabletDiv>;
};

export default TabletOnlyUp;