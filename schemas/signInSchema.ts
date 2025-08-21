import * as z from "zod";

export const signInSchema = z.object({
  identifier: z
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password should have a minimum of 8 characters" }),
});
