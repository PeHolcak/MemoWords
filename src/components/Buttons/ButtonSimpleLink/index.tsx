import React from 'react';

import ButtonSimple, {
  ButtonSimpleProps
} from '@components/Buttons/ButtonSimple';

import * as S from './styled';

type ButtonSimpleLinkProps = Omit<ButtonSimpleProps, 'onClick'> & {
  link: string;
};

const ButtonSimpleLink: React.FC<ButtonSimpleLinkProps> = ({
  children,
  link,
  variant = 'primary'
}) => {
  return (
    <S.StyledLink href={link}>
      <ButtonSimple variant={variant}>{children}</ButtonSimple>
    </S.StyledLink>
  );
};

export default ButtonSimpleLink;
