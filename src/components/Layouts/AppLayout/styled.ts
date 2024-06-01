import styled from "styled-components";

export const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  min-height: calc(100vh - 50px - 50px - 150px);

  position: relative;
`;

export const ChildrenContainer = styled.div`
  max-width: 1280px;
`;

export const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  min-height: 100vh;
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
