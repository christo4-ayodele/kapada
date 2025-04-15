import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required.").max(50),
  lastName: z.string().min(2, "Last Name is required.").max(50),
  email: z.string().email("Invalid Email"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters."),
  message: z.string().min(5, "Message should be at least 5 characters."),
  radiotype: z.enum(["freight", "plastic", "agric"], {
    required_error: "You need to select a notification type.",
  }),
});
