import styled from 'styled-components';

export const SideBarItemWrap = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 0.4rem);

  margin: 0.5rem 0.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.beta};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.contrast_text};
  }
`;

export const FilterIconWrap = styled.div`
  padding: 1rem;
  width: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelWrap = styled.span`
  padding-left: 1rem;

  max-width: 8.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
