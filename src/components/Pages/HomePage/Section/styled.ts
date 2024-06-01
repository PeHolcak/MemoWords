import styled, { css } from "styled-components";

import { SizeType } from ".";

type SectionWrapper = { $size: SizeType; $disableTopOffset?: boolean };

export const SectionWrapper = styled.div<SectionWrapper>`
  margin: 4rem 1rem;

  width: 100%;

  ${({ $disableTopOffset }) =>
    $disableTopOffset
      ? css`
          margin-top: 0;
        `
      : null}

  ${({ $size }) =>
    $size === "sm"
      ? css`
          max-width: 1280px;
        `
      : null}
`;
