import { Grid } from '@mui/material';

import React from 'react';

const SettingItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default SettingItem;
