import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { IconButton, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import MenuButton from './MenuButton';

import * as S from './styled';

// Stylování motion.div s použitím styled-components
const SwipeableBox = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 390px;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px 20px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  touch-action: none;

  z-index: ${({ theme }) => theme.zIndexes.xxl};
`;

const DragBar = styled.div`
  background-color: grey;

  width: 100px;
  height: 5px;

  cursor: grab;

  border-radius: 2px;
`;

const DragbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; // Vytvoří mezery mezi tlačítky
  margin-top: 20px; // Mezera pod nadpisem
`;

// Tlačítko pro zavření s ikonou "×", která by měla být nahrazena ikonou z MUI nebo jinou ikonou podle vaší volby
const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);

  const handleDragEnd = (_event: any, info: { offset: { y: number } }) => {
    if (info.offset.y > 100) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <S.MenuButton>M</S.MenuButton>
      {/* <SwipeableBox
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        style={{ y, opacity }}
        onDragEnd={handleDragEnd}
      >
        <DragbarWrapper>
          <DragBar />
        </DragbarWrapper>
        <CloseButton onClick={() => setIsOpen(false)}>
          ×
        </CloseButton>

        <Typography variant="h6" component="h3">
          What are you looking for?
        </Typography>

        <ButtonsContainer>
          <MenuButton
            icon={<SettingsIcon />} // Předáváme ikonu jako React komponentu
            label="Engine Oil"
            onClick={() => console.log("Engine Oil clicked")}
          />

          <MenuButton
            icon={<SettingsIcon />} // Předáváme ikonu jako React komponentu
            label="Engine Oil"
            onClick={() => console.log("Engine Oil clicked")}
          />
          <MenuButton
            icon={<SettingsIcon />} // Předáváme ikonu jako React komponentu
            label="Engine Oil"
            onClick={() => console.log("Engine Oil clicked")}
          />
          <MenuButton
            icon={<SettingsIcon />} // Předáváme ikonu jako React komponentu
            label="Engine Oil"
            onClick={() => console.log("Engine Oil clicked")}
          />
          <MenuButton
            icon={<SettingsIcon />} // Předáváme ikonu jako React komponentu
            label="Engine Oil"
            onClick={() => console.log("Engine Oil clicked")}
          />
        </ButtonsContainer>
      </SwipeableBox> */}
    </>
  );
};

export default MobileMenu;
