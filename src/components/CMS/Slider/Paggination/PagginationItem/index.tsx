import React from "react";

import * as S from "./styled";

type SliderProps = {
  index: number;
  isActive: boolean;
  onActiveIndexChange: (newActiveIndex: number) => void;
};

const PaginationDots: React.FC<SliderProps> = ({
  index,
  isActive,
  onActiveIndexChange,
}) => {
  const onDotClickHandler = () => {
    onActiveIndexChange(index);
  };

  return <S.Dot key={index} $isActive={isActive} onClick={onDotClickHandler} />;
};

export default PaginationDots;
