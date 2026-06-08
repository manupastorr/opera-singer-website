import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(1, "Please enter a message."),
});
  