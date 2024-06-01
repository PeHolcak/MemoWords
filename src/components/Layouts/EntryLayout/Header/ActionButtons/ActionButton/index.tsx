import React from "react";

import * as S from "./styled";

type ActionButtonProps = React.PropsWithChildren<{
  onClick: () => void;
}>;

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <S.ButtonSimple onClick={onClick}>
      <S.LinkLabel>{children}</S.LinkLabel>
    </S.ButtonSimple>
  );
};

export default ActionButton;
