import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import * as S from "./styled";
import { getSecondsFromMilis } from "@utils/timeUtils";

export type Direction = "left" | "right"

type UserCardProsp = {
  name: string;
  age: number;
  image: string;
  rotation: number;
  onSwipe: (direction: Direction) => void
};

const ANIMATION_DURATION = 400 // In ms


const TRANSITION = { type: "tween",  duration: getSecondsFromMilis(ANIMATION_DURATION)};

const UserCard: React.FC<UserCardProsp> = ({ name, age, image, rotation, onSwipe }) => {
  const [maxSwipe, setMaxSwipe] = useState<number>(
    window ? window.innerWidth / 2 : 400
  );
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-maxSwipe, 0, maxSwipe], [2, 1, 2]);
  const thubnailIconRotation = useTransform(
    x,
    [-maxSwipe, -100, 0, 100, maxSwipe],
    [0, 60, 90, 150, 180]
  );
  const rotate = useTransform(
    x,
    [-maxSwipe, 0, maxSwipe],
    [-15, rotation, 15]
  );

  const backgroundColor = useTransform(
    x,
    [-maxSwipe, -100, 0, 100, maxSwipe],
    [
      "rgba(0,256,0,1)",
      "rgba(0,256,0,0.7)",
      "rgba(0,0,0,0)",
      "rgba(256,0,0,0.7)",
      "rgba(256,0,0,1)",
    ]
  );
  const backgroundOpacity = useTransform(
    x,
    [-maxSwipe, -100, 0, 100, maxSwipe],
    [1, 0.7, 0, 0.7, 1],
    { clamp: false }
  );
  console.log("maxSwipe", maxSwipe);
  useEffect(() => {
    const updateMaxSwipe = () => setMaxSwipe(window.innerWidth / 2);

    window.addEventListener("resize", updateMaxSwipe);
    updateMaxSwipe();

    return () => window.removeEventListener("resize", updateMaxSwipe);
  }, []);

  useEffect(() => {
    const updateY = () => {
      y.set(x.get() < 0 ? x.get() * -1 : x.get());
    };

    const unsubscribeX = x.on("change", updateY);

    return () => {
      unsubscribeX();
    };
  }, [x, y]);

  const handleDragEnd = async (
    _: any,
    info: { offset: { x: any }; velocity: { x: any } }
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const screenWidth = window.innerWidth;
    
    if (offset > screenWidth / 4 || velocity > 700) {
      await controls.start({
        x: screenWidth,
        transition: TRANSITION,
      });
      setTimeout(() => {
        onSwipe("right")
      }, ANIMATION_DURATION);
    } else if (offset < -screenWidth / 4  || velocity < -700) {
      await controls.start({
        x: -screenWidth,
        transition: TRANSITION,
      });
      setTimeout(() => {
        onSwipe("right")
      }, ANIMATION_DURATION);
    } else {
      await controls.start({
        x: 0,
        transition: TRANSITION,
      });
    }
  };
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      dragElastic={1}
      transition={TRANSITION}
      style={{ x, y, scale, position: "absolute", rotate }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 },
      }}
      animate={controls}
    >
      <S.StyledCard>
        <CardMedia component="img" height="100%" image={image} alt={name} />
        <S.UserInfo>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2">{age}</Typography>
        </S.UserInfo>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor,
            opacity: backgroundOpacity,
          }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <motion.div
              style={{
                rotate: thubnailIconRotation,
                fontSize: "50px",
              }}
            >
              <ThumbUpIcon style={{ fontSize: "96px" }} />
            </motion.div>
          </div>
        </motion.div>
      </S.StyledCard>
    </motion.div>
  );
};

export default UserCard;
