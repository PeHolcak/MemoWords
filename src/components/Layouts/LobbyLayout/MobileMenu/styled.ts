import styled from "styled-components";

export const MenuButton = styled.div`
  position: fixed;

  bottom: 0;
  right: 0;

  background-color: green;
  padding: 1rem 1.5rem;

  z-index: ${({ theme }) => theme.zIndexes.xl};

  border-top-left-radius: .7rem;
  /* border-bottom-left-radius: 50%; */
  /* border-top-right-radius: 50%; */
`;
