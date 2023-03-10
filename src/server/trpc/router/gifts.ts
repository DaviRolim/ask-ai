import { z } from "zod";
import { giftSchema } from "../schemas/gift.schema";

import { router, publicProcedure } from "../trpc";

export const giftRouter = router({
  suggestion: publicProcedure
    .input(giftSchema)
    .mutation(async ({ input, ctx }) => {
      const completion = await ctx.openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(input),
        temperature: 0.6,
        max_tokens: 200,
      });
      return completion?.data?.choices[0]!.text;
      //   return 'placeholder'
    }),
});

function generatePrompt(input: z.infer<typeof giftSchema>) {
  return `Sugira 3 presentes de natal para uma pessoa do genero ${input.gender} 
    ,idade ${input.age}, que possui esses interesses: ${input.hobbies}. Se possivel, responda em pt-BR`;
  // return `Suggest three gifts for a person with gender ${input.gender} 
  //   ,age ${input.age}, that have these hobbies: ${input.hobbies}`;
}
