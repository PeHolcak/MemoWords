import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

import * as S from "./styled";

type SliderProps = {
  Icon: React.FC<SvgIconProps>;
  onClickHandler: () => void;
};

const Arrow: React.FC<SliderProps> = ({ Icon, onClickHandler }) => {

  const StyledIcon = S.getStyledIcon(Icon);

  return (
    <S.ArrowWrap onClick={onClickHandler}>
      <StyledIcon />
    </S.ArrowWrap>
  );
};

export default Arrow;
