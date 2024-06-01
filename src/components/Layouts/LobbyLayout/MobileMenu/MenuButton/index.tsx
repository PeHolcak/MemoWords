// MenuButton.tsx
import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface MenuButtonProps {
  icon: React.ReactNode; // Komponenta ikony MUI nebo vlastní SVG/JSX
  label: string; // Text tlačítka
  onClick?: () => void; // Volitelná funkce pro kliknutí na tlačítko
}

// Stylování tlačítka pomocí styled-components
const StyledButton = styled(Button)`
  width: 80px; // nebo jakákoli jiná velikost dle návrhu
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; // Změňte podle designu
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029; // Měkký stín

  &:hover {
    background-color: #e0e0e0; // Tmavší na hover
  }
`;

const IconWrapper = styled.div`
  // Přizpůsobte vzhled ikony podle vašich potřeb
  margin-bottom: 8px;
`;

const Label = styled(Typography)`
  font-size: 0.75rem; // Přizpůsobte velikost fontu dle designu
`;

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, onClick }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <StyledButton variant="contained" onClick={onClick}>
        <IconWrapper>{icon}</IconWrapper>
        <Label>{label}</Label>
      </StyledButton>
    </motion.div>
  );
};

export default MenuButton;
