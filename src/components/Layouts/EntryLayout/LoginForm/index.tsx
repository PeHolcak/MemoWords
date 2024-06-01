import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';

import * as S from './styled';

const validationSchema = Yup.object({
  email: Yup.string().email('Neplatný email').required('Email je povinný'),
  password: Yup.string()
    .min(8, 'Heslo musí mít alespoň 8 znaků')
    .required('Heslo je povinné')
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <S.LoginBox>
      <S.StyledForm onSubmit={formik.handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          Přihlášení
        </Typography>
        <TextField
          label="Emailová adresa"
          variant="outlined"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
        <TextField
          label="Heslo"
          variant="outlined"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Přihlásit se
        </Button>
      </S.StyledForm>
    </S.LoginBox>
  );
};

export default LoginForm;
