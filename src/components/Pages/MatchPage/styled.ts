import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  height: calc(100dvh - 50px - 50px - 150px);

  position: relative;
`;

export const MatchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  min-height: 100dvh;
`;
