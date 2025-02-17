import { z } from "zod";

export const registerValidation = z.object({
  name: z.string({ message: "name mustbe string" }),
  email: z
    .string({ message: "email mustbe string" })
    .email({ message: "invalid email adderse" }),
  password: z.string({ message: "password required" }),
  confirmPassword: z.string({ message: "confirmPassword required" }),
});
