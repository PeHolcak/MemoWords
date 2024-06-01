import React, { useContext } from 'react';

import ThemeContext from '@contexts/ThemeContext';

import Switch from './Switch';
import * as S from './styled';

const DarkModeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const onChangeTheme = () => {
    themeContext?.toggleTheme();
  };

  return (
    <Switch
      onChange={onChangeTheme}
      value={themeContext?.isDarkMode}
      enabledIcon={
        <S.StyledI className={`material-icons`}>brightness_3</S.StyledI>
      }
      disabledIcon={
        <S.StyledI className={`material-icons`}>highlight</S.StyledI>
      }
    />
  );
};

export default DarkModeSwitch;
