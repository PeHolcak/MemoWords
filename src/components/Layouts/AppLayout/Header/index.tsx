// components/Navbar.js
import React from 'react';
import Image from 'next/image';

import TopToDown from '@components/Animations/TopToDown';
import ButtonSimpleLink from '@components/Buttons/ButtonSimpleLink';

import * as S from './styled';
import DarkModeSwitch from '@components/DarkModeSwitch';

const Header = () => {
  const links = [
    {
      href: '/courses',
      name: 'Courses',
      label: 'Courses',
      isActive: true
    },
    {
      href: '/courses',
      name: 'English1',
      label: 'English1'
    },
    {
      href: '/courses',
      name: 'English2',
      label: 'English2'
    },
    {
      href: '/profile',
      name: 'Profile',
      label: 'Profile'
    }
  ];

  return (
    <TopToDown>
      <S.NavbarContainer>
        <S.Logo>MemoWord</S.Logo>
        <S.LinksWrapper>
          <S.LinksContainer>
            {links.map(link => (
              <S.LinksItem key={`link_${link.name}`} $isActive={link.isActive}>
                <ButtonSimpleLink link={link.href}>
                  {link.label}
                </ButtonSimpleLink>
              </S.LinksItem>
            ))}
          </S.LinksContainer>
        </S.LinksWrapper>
        <S.Controllers>
          <DarkModeSwitch />
          <S.ProfileIcon>
            <Image
              src={
                'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
              }
              alt="Profile"
              width={40}
              height={40}
            />
          </S.ProfileIcon>
        </S.Controllers>
      </S.NavbarContainer>
    </TopToDown>
  );
};

export default Header;
