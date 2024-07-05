import React from 'react';
import Grid from '@mui/material/Grid';

import LobbyLayout from '@components/Layouts/LobbyLayout';
import Modal from '@components/Modal';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import * as S from './styled';
import Header from './Header';
import { useEntryLayout } from './useEntryLayout';

const EntryLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {
    handleOpenLoginModal,
    handleOpenRegisterModal,
    handleCloseModal,
    visibleModal
  } = useEntryLayout();

  const createModalContent = () => {
    switch (visibleModal) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      default:
        return null;
    }
  };

  return (
    <LobbyLayout>
      <S.EntryLayoutWrapper>
        <S.EntryLayoutContainer>
          <Header
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenRegisterModal={handleOpenRegisterModal}
          />
          <Grid
            container
            flex={1}
            alignContent="center"
            justifyContent="center"
          >
            {children}
          </Grid>
          <Modal open={visibleModal !== 'none'} handleClose={handleCloseModal}>
            {createModalContent()}
          </Modal>
        </S.EntryLayoutContainer>
      </S.EntryLayoutWrapper>
    </LobbyLayout>
  );
};

export default EntryLayout;
