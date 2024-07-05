import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type VisibleModalType = 'none' | 'login' | 'register';

export const useEntryLayout = () => {
  const [visibleModal, setVisibleModal] = useState<VisibleModalType>('none');
  const router = useRouter();
  const { openForm } = router.query;

  const handleOpenLoginModal = () => {
    setVisibleModal('login');
  };

  const handleOpenRegisterModal = () => {
    setVisibleModal('register');
  };

  const handleCloseModal = () => {
    setVisibleModal('none');
  };

  useEffect(() => {
    switch (openForm) {
      case 'login':
        setVisibleModal('login');
        break;
      case 'register':
        setVisibleModal('register');
        break;
    }
  }, [openForm]);

  return {
    handleOpenLoginModal,
    handleOpenRegisterModal,
    handleCloseModal,
    visibleModal
  };
};
