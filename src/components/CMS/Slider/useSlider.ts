import React, { useState, useEffect } from "react";
import { ItemType } from ".";

const TIME_TO_SLIDE = 2000;

const transition = { type: "linear", duration: 0.6 };
type Dirrection = "left" | "right";

type SlideSetting = {
  currentIndex: number;
  dirrection?: Dirrection;
};

const sliderVariants = {
  initial: (direction: Dirrection) => ({
    x: direction === "left" ? "100%" : "-100%",
    opacity: 1,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  exit: (direction: Dirrection) => ({
      x: direction === "left" ? "-100%" : "100%",
      rotateX: 90,
      scale: 0,
      opacity: 0,
      transition,
    })
};

export const useSlider = (items: ItemType[]) => {
  const [slideSetting, setSlideSetting] = useState<SlideSetting>({
    currentIndex: 0,
  });
  const sliderInterval = React.useRef<NodeJS.Timeout | null>(null);

  const clearSliderInterval = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
    }
  };

  const createSliderInterval = () => setInterval(nextSlide, TIME_TO_SLIDE);

  useEffect(() => {
    sliderInterval.current = createSliderInterval();

    return clearSliderInterval;
  }, []);

  const resetAutoSlide = () => {
    clearSliderInterval();
    sliderInterval.current = createSliderInterval();
  };

  const nextSlide = () => {
    setSlideSetting((prevIndex) => {
      const newCurrentIndex = (prevIndex.currentIndex + 1) % items.length;
      return { currentIndex: newCurrentIndex, dirrection: "right" };
    });
  };

  const onNextButtonClick = () => {
    resetAutoSlide();
    nextSlide();
  };

  const prevSlide = () => {
    setSlideSetting((prevIndex) => {
      const newCurrentIndex = prevIndex.currentIndex - 1;
      return {
        currentIndex: newCurrentIndex < 0 ? items.length - 1 : newCurrentIndex,
        dirrection: "left",
      };
    });
  };

  const onPrevButtonClick = () => {
    resetAutoSlide();
    prevSlide();
  };

  const onActiveIndexChange = (newActiveIndex: number) => {
    resetAutoSlide();
    setSlideSetting({ currentIndex: newActiveIndex });
  };

  const itemsLength = items.length;
  const currentItem = items[slideSetting.currentIndex];
  console.log("slideSetting", slideSetting);
  return {
    slideSetting,
    itemsLength,
    currentItem,
    onActiveIndexChange,
    onPrevButtonClick,
    prevSlide,
    onNextButtonClick,
    nextSlide,
    sliderVariants,
  };
};
