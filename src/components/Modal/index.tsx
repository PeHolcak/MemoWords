// components/Modal.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  /* Zde můžete přidat vlastní styly pro dialog, pokud je potřeba */
`;

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose, title, children }) => {
  return (
    <StyledDialog open={open} onClose={handleClose} aria-labelledby="custom-dialog-title">
      {title ? <DialogTitle id="custom-dialog-title">{title}</DialogTitle> : null}
      <DialogContent>
          {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Zavřít
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default Modal;