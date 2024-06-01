import SideBarItem from './SideBarItem';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { useTheme } from 'styled-components';

import { publicImages } from '@constants/public-images';

import * as S from './styled';
import Settings from './Settings';

type SidebarProps = {
  onSidebarOpenHandler: () => void;
  onSidebarCloseHandler: () => void;
  isSidebarOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  onSidebarOpenHandler,
  onSidebarCloseHandler,
  isSidebarOpen
}) => {
  const theme = useTheme();

  return (
    <S.SidebarWrapper
      onMouseEnter={onSidebarOpenHandler}
      onMouseLeave={onSidebarCloseHandler}
    >
      <S.AboutApplication>
        <S.AplicationInfo>
          <Typography variant="h5" component="h1">
            MemoWords
          </Typography>
          <Typography variant="body2" color={theme.colors.contrast_text}>
            Uč se nová slovíčka
          </Typography>
        </S.AplicationInfo>
        <S.ImageWrap>
          <Image src={publicImages.logo} width={64} height={64} alt="logo" />
        </S.ImageWrap>
      </S.AboutApplication>
      <S.SideBarItemsWrap>
        <SideBarItem label="Úvod" description="Úvodní slide" />
        <SideBarItem label="Obsah" description="Úvodní slide" />
        <SideBarItem label="O aplikaci" description="Úvodní slide" />
        <SideBarItem label="Obsah" description="Úvodní slide" />
        <SideBarItem label="O aplikaci" description="Úvodní slide" />
      </S.SideBarItemsWrap>
      <Settings isSidebarOpen={isSidebarOpen} />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
