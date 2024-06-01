import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MessageIcon from "@mui/icons-material/Message";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const BottomBar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);


  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  height: 64px; /* Adjust height as needed */
  margin: 0 auto;
  padding: 0 12px;
  background-color: #fff; /* Assuming white bar based on the image */
  border-radius: 40px; /* Adjust as needed */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);


  background-color: black;

  width: 100%;
  max-width: 400px;

  margin-bottom: 16px;
`;

type ActiveType = { isActive?: boolean }

const buttonColorStyles = css<ActiveType>`
    ${({ isActive }) =>
    isActive
      ? css`
          color: red;

        `
      :  css`
          color: white;
        `}
`

const StyledButton = styled(motion.button)<ActiveType>`
  background: none;
  border: none;
  padding: 0 16px;
  /* border-radius: 6px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  outline: none;

  &:hover {
    /* background: rgba(
      255,
      255,
      255,
      0.2
    ); Adjust hover background as needed */
  }

  & svg {
    font-size: 1.5rem; /* Adjust icon size as needed */
  }

  ${buttonColorStyles};
  
`;

export const ButtonText = styled.span<ActiveType>`
    font-size: 0.75rem; /* Adjust label font size as needed */
    color: #333; /* Adjust label color as needed */
    margin-top: 8px; 
  ${buttonColorStyles};
`

// Add more icon buttons as needed
const Navbar = () => {
  const router = useRouter();

  const handleButtonClick = (link: string) => {
    router.push(link);
    // Add additional logic for button click here
  };

  const NAVBAR_ITEMS_CONF = [
    {
      name: "match",
      link: "/match",
      label: "Match",
      Icon: CreditCardIcon,
    },
    {
      name: "wall",
      link: "/wall",
      label: "Wall",
      Icon: DynamicFeedIcon,
    },
    {
      name: "message",
      link: "/message",
      label: "Message",
      Icon: MessageIcon,
    },
    {
      name: "crew",
      link: "/crew",
      label: "Crew",
      Icon: PeopleAltIcon,
    },
  ];

  return (
    <BottomBar>
      {NAVBAR_ITEMS_CONF.map((navbarItem) => (
        <StyledButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(navbarItem.link)}
          isActive={router.pathname === navbarItem.link}
        >
          <navbarItem.Icon />
          <ButtonText>{navbarItem.label}</ButtonText>
        </StyledButton>
      ))}
    </BottomBar>
  );
};

export default Navbar;
