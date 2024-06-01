import LanguageSwitch from '@components/LanguageSwitch';
import DarkModeSwitch from '@components/DarkModeSwitch';

import SettingItem from './SettingItem';
import * as S from './styled';

type SettingsProps = { isSidebarOpen: boolean };

const Settings: React.FC<SettingsProps> = ({ isSidebarOpen }) => {
  const settingsConf = [
    { name: 'languageSwitch', content: <LanguageSwitch /> },
    { name: 'darkModeSwitch', content: <DarkModeSwitch /> }
  ];

  const sidebarVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      },
      transitionEnd: {
        display: 'none'
      }
    }
  };

  return (
    <S.SettingsWrapper
      initial="closed"
      animate={isSidebarOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      {settingsConf.map(setting => (
        <SettingItem key={`setting_item_${setting.name}`}>
          {setting.content}
        </SettingItem>
      ))}
    </S.SettingsWrapper>
  );
};

export default Settings;
