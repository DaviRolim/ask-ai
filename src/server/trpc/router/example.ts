import { z } from "zod";

import { router, publicProcedure } from "../trpc";




export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ animal: z.string().nullish() }).nullish())
    .query(async ({ input, ctx })  => {
      const completion = await ctx.openai.createCompletion({
        model: "text-davinci-002",
        prompt: generatePrompt(input?.animal ?? "cat"),
        temperature: 0.6,
      });
      return completion?.data?.choices[0]?.text;
    }),
});

function generatePrompt(animal: string) {
  const capitalizedAnimal =
    animal[0]!.toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
