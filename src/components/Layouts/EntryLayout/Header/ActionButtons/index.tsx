import React from "react";
import Grid from "@mui/material/Grid";
import ActionButton from "./ActionButton";

type ActionButtonsProps = {
  handleOpenLoginModal: () => void;
  handleOpenRegisterModal: () => void;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({
  handleOpenLoginModal,
  handleOpenRegisterModal,
}) => {

  const onContactClick = () => {};

  const onTermsClick = () => {};

  const actionButtonsConfig = [
    {
      label: "Login",
      onClick: handleOpenLoginModal,
    },
    {
      label: "Register",
      onClick: handleOpenRegisterModal,
    },
    {
      label: "Kontakt",
      onClick: onContactClick,
    },
    {
      label: "Podmínky",
      onClick: onTermsClick,
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center" pb={2}>
      {actionButtonsConfig.map((actionButton) => (
        <Grid item>
          <ActionButton onClick={actionButton.onClick}>
            {actionButton.label}
          </ActionButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActionButtons;
