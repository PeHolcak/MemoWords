import styled from 'styled-components';
import Button from '@mui/material/Button';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  overflow: hidden;
  background-color: #f0f0f0;
  padding: 60px 20px;
  

  min-height: 30vh;
`;

export const TextSection = styled.div`
  text-align: center;
  max-width: 760px;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    margin-right: 10px; /* Přidání mezery mezi tlačítky */
    border-color: #000; /* Změna barvy ohraničení na tmavou */
    color: #000; /* Změna barvy textu na tmavou */
    font-weight: bold; /* Ztučnění písma */

    &:hover {
      background-color: #000; /* Tmavé pozadí při najetí myší */
      color: #fff; /* Světlý text při najetí myší */
      border-color: #000;
    }
  }

  &:first-of-type {
    background-color: #000; /* Tmavé pozadí pro první tlačítko */
    color: #fff; /* Světlý text pro první tlačítko */
  }
`;

// Případně můžeš přidat další stylizaci pro obrazek, pokud je použitý v Banneru
export const StyledImage = styled.img`
  width: 100%;
  height: auto; /* Udržení původního poměru stran */
  object-fit: cover;
  object-position: center;
  position: absolute; /* Umístění pod textem */
  z-index: -1; /* Zajištění, že obrazek bude v pozadí */
  opacity: 0.5; /* Snížení průhlednosti pro lepší čitelnost textu */
`;