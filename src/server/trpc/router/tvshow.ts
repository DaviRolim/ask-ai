import { z } from "zod";
import { tvShowSuggestionSchema } from "../schemas/tv_show.schema";

import { router, publicProcedure } from "../trpc";

export const tvShowRouter = router({
  suggestion: publicProcedure
    .input(tvShowSuggestionSchema)
    .mutation(async ({ input, ctx }) => {
      const completion = await ctx.openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(input),
        temperature: 0.6,
        max_tokens: 300,
      });
      return completion?.data?.choices[0]!.text;
      //   return 'placeholder'
    }),
});

function generatePrompt(input: z.infer<typeof tvShowSuggestionSchema>) {
  return `Você pode sugerir alguns filmes ou series baseado nos meus filmes e series favoritos, 
  que sao: ${input.moviesOrShows}. 
  Considere apenas filmes e series que sejam exclusivamente das seguintes plataformas: ${input.consideredPlatforms}`
}
