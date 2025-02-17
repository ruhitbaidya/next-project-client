import { z } from "zod";

export const loginValidation = z.object({
  email: z
    .string({ message: "email mustbe string" })
    .email({ message: "invalid email adderse" }),
  password: z.string({ message: "password required" }),
});
