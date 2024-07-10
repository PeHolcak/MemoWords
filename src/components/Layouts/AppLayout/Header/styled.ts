import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 32px;
  background-color: #fff;
  border-radius: 25px;
  max-width: 1280px;
  margin: 10px auto;

  width: 100%;

  width: calc(100% - 64px);
`;

export const Logo = styled.h1`
  font-size: 1.5em;
  color: #333;
`;

export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;

export const LinksWrapper = styled.nav`
  flex: 1;
`;

export const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  padding: 0;
  margin: 0;
`;

type LinksItemProps = { $isActive?: boolean };

export const LinksItem = styled.li<LinksItemProps>`
  list-style: none;

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          span {
            color: ${theme.colors.alpha};
          }
          font-weight: 700;
        `
      : null}
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
