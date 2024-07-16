import * as yup from "yup";

import { commonErrors } from "@errors/common.errors";

export const validatePositiveInteger = () => {
    return yup.number()
    .integer(commonErrors.mustBeInteger)
    .min(0, commonErrors.minValue)
    .max(10000, commonErrors.maxValue)
    .typeError(commonErrors.mustBeNumber)
}

type Error = {
    path: string;
    message: string;
    type: string;
  };
  
  const GeneralError = {
    isValid: false,
    error: {
      path: "",
      message: "GeneralError",
      type: "",
    },
  };

export async function handleValidation<T>(
    validationFunction: () => Promise<T>
  ): Promise<{ validatedData?: T; error?: Error; isValid: boolean }> {
    try {
      const validatedData = await validationFunction();
      return { validatedData, isValid: true };
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return {
          isValid: false,
          error: {
            path: error.path || "",
            message: error.message,
            type: error.type || "",
          },
        };
      } else {
        throw GeneralError;
      }
    }
  }
  