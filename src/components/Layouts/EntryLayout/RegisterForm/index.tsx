// pages/register.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import styled from "styled-components";

const RegisterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; // Mobile first
  max-width: 400px;
  padding: 20px;
`;

// Schema pro validaci pomocí Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Jméno je povinné"),
  email: Yup.string().email("Neplatný email").required("Email je povinný"),
  password: Yup.string()
    .min(8, "Heslo musí mít alespoň 8 znaků")
    .required("Heslo je povinné"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Hesla se musí shodovat")
    .required("Potvrzení hesla je povinné"),
});

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Zde můžete zpracovat registraci, např. volání API
      console.log(values);
    },
  });

  return (
    <RegisterBox>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registrace
        </Typography>
        <TextField
          label="Jméno"
          variant="outlined"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
        />
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
        <TextField
          label="Potvrzení hesla"
          variant="outlined"
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Zaregistrovat se
        </Button>
      </StyledForm>
    </RegisterBox>
  );
};

export default RegisterPage;
