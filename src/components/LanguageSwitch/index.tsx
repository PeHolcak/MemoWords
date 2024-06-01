// components/LanguageSwitcher.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';

const LanguageSwitcherWrapper = styled.div`
  margin: 1rem;
`;

const PillToggleButton = styled(ToggleButton)`
  border-radius: 50px !important;
  padding: 0.5rem 1rem !important;
  margin: 0 0.1rem;

  &.Mui-selected {
    background-color: #0070f3 !important;
    color: white !important;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const changeLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLocale: string | null
  ) => {
    if (newLocale && newLocale !== locale) {
      router.push({ pathname, query }, asPath, { locale: newLocale });
    }
  };

  return (
    <LanguageSwitcherWrapper>
      <ToggleButtonGroup
        value={locale}
        exclusive
        onChange={changeLanguage}
        aria-label="language switcher"
      >
        {locales?.map(loc => (
          <PillToggleButton key={loc} value={loc}>
            {loc}
          </PillToggleButton>
        ))}
      </ToggleButtonGroup>
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
