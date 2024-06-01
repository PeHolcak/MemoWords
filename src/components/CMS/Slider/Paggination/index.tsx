import React from "react";

import PagginationItem from "./PagginationItem";
import * as S from "./styled";

type SliderProps = {
  activeIndex: number;
  total: number;
  onActiveIndexChange: (newActiveIndex: number) => void;
};

const PaginationDots: React.FC<SliderProps> = ({
  activeIndex,
  total,
  onActiveIndexChange,
}) => {
  return (
    <S.DotsContainer>
      {Array.from({ length: total }).map((_, index) => (
        <PagginationItem
          key={index}
          index={index}
          isActive={index === activeIndex}
          onActiveIndexChange={onActiveIndexChange}
        />
      ))}
    </S.DotsContainer>
  );
};

export default PaginationDots;
