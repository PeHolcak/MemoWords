import * as yup from "yup";

import { validatePositiveInteger } from "@utils/validationUtils";

export const userUpdateSchema = yup.object({
  id: yup.string().length(24).required(),
  username: yup.string().min(1).max(100).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(50).required(),
  profilePicture: yup.string().url(),
});

export const userListSchema = yup.object({
  pageSize: validatePositiveInteger(),
  pageIndex: validatePositiveInteger(),
});
