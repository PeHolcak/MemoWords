// components/Navbar.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import TopToDown from "@components/Animations/TopToDown";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 32px;
  background-color: #fff;
  border-radius: 25px; // Zaoblené rohy
  max-width: 1280px; // Max šířka navbaru
  margin: 10px auto; // Centrování s nějakým okrajem

  width: 100%;

  width: calc(100% - 64px);
`;

const Logo = styled.h1`
  font-size: 1.5em; // Velikost fontu pro logo
  color: #333; // Barva fontu pro logo
`;

// Použijte vlastní ikonu, zde používám příklad obrázku
const ProfileIcon = styled.div`
  width: 40px; // Nastavte šířku ikony
  height: 40px; // Nastavte výšku ikony
  border-radius: 20px; // Kruhová ikona
  overflow: hidden;
`;

const Header = () => {
  return (
    <TopToDown>
      <NavbarContainer>
        <Logo>Discover</Logo>
        <ProfileIcon>
          <Image
            src={
              "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            }
            alt="Profile"
            width={40}
            height={40}
          />
        </ProfileIcon>
      </NavbarContainer>
    </TopToDown>
  );
};

export default Header;
