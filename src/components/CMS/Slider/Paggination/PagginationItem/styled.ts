import styled from "styled-components";


type DotProps = {$isActive: boolean}

export const Dot = styled.span<DotProps>`
  padding: 0.3rem;
  margin: 0 0.1rem;
  border-radius: 50%;
  cursor: pointer;

  background: ${({ $isActive }) => ($isActive ? "black" : "grey")};
  transition: background .5s ease;

  &:last-child {
    margin-right: 0;
  }
`;