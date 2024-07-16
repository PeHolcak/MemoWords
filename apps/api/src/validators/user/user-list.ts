import { userListSchema } from "@dtoIns/user.validation";
import { handleValidation } from "@utils/validationUtils";

export type listUserRequestBodyType = { pageSize: number; pageIndex: number };


export const validateListUsersData = async (reqBody: listUserRequestBodyType) =>
  await handleValidation(() => userListSchema.validate(reqBody));