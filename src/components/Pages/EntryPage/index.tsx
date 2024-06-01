import React, { useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import EntryLayout from "@components/Layouts/EntryLayout";

import * as S from "./styled";


const Entry: React.FC = () => {

  return (
    <EntryLayout>
      <Grid item flex={0}>
        <S.Logo />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to Spacer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
    </EntryLayout>
  );
};

export default Entry;
