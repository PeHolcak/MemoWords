import React from 'react';

import * as S from './styled';

export type ButtonProps = React.PropsWithChildren<{
  variant: 'contained' | 'outlined';
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
  return (
    <S.StyledButton variant={variant} onClick={onClick}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
