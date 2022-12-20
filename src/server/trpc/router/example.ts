import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .mutation(async ({ input, ctx }) => {
      const completion = await ctx.openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(input?.text ?? "Me peça para perguntar alguma coisa."),
        temperature: 0.6,
        max_tokens: 200,
      });
      return completion?.data?.choices[0]?.text;
    }),
});

function generatePrompt(text: string) {
  return `${text}. Se possivel, responda-me em pt-BR.`

}
