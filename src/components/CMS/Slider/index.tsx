import React from "react";
import { AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useSlider } from "./useSlider";
import Paggination from "./Paggination";
import Slide from "./Slide";
import * as S from "./styled";
import Arrow from "./Arrow";

export type ItemType = {
  name: string;
  description: string;
};

type SliderProps = {
  items: ItemType[];
};

const Slider: React.FC<SliderProps> = ({ items }) => {
  const {
    slideSetting,
    itemsLength,
    currentItem,
    onActiveIndexChange,
    onPrevButtonClick,
    onNextButtonClick,
    sliderVariants,
  } = useSlider(items);
  return (
    <S.SliderWrap>
      <S.SliderContainer>
        <AnimatePresence initial={false} custom={slideSetting.dirrection}>
          <S.AnimatedSlideWrap
            key={`animated_slide_${slideSetting.currentIndex}`}
            custom={slideSetting.dirrection}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Slide
              name={currentItem.name}
              description={currentItem.description}
            />
          </S.AnimatedSlideWrap>
        </AnimatePresence>
        <S.Paggination>
          <Paggination
            activeIndex={slideSetting.currentIndex}
            total={itemsLength}
            onActiveIndexChange={onActiveIndexChange}
          />
        </S.Paggination>
      </S.SliderContainer>
      <S.ArrowWrap $position="left">
        <Arrow Icon={ArrowBackIosNewIcon} onClickHandler={onPrevButtonClick} />
      </S.ArrowWrap>
      <S.ArrowWrap $position="right">
        <Arrow Icon={ArrowForwardIosIcon} onClickHandler={onNextButtonClick} />
      </S.ArrowWrap>
    </S.SliderWrap>
  );
};

export default Slider;
