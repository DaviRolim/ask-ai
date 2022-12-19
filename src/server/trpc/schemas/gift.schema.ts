import { z } from "zod";

export const giftSchema = z.object({
  gender: z.string(),
  age: z.string(),
  hobbies: z.string(),
  relationship: z.string(),
});
