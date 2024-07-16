import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup.string().min(1).max(100).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(50).required(),
});