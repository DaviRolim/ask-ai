import { z } from "zod";

export const tvShowSuggestionSchema = z.object({
  moviesOrShows: z.string(),
  consideredPlatforms: z.string(),
});
