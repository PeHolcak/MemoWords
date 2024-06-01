import React from 'react';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';

import ClickableIcon from '@components/ClickableIcon';
import { routes } from '@constants/routes';

import ActionButtons from './ActionButtons';

type HeaderProps = {
  handleOpenLoginModal: () => void;
  handleOpenRegisterModal: () => void;
};

const Header: React.FC<HeaderProps> = ({
  handleOpenLoginModal,
  handleOpenRegisterModal
}) => {
  return (
    <Grid container spacing={4} justifyContent="space-between">
      <Grid item>
        <ClickableIcon icon={<HomeIcon />} href={routes.home} />
      </Grid>
      <Grid item>
        <ActionButtons
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenRegisterModal={handleOpenRegisterModal}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
