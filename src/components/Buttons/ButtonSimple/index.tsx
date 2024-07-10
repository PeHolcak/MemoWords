import * as S from './styled';

export type ButtonSimpleProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
};

const ButtonSimple: React.FC<ButtonSimpleProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <S.StyledButton variant={variant} onClick={onClick}>
      {children}
    </S.StyledButton>
  );
};

export default ButtonSimple;
