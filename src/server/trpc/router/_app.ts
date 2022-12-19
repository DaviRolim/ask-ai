import { router } from "../trpc";
import { exampleRouter } from "./example";
import { giftRouter } from "./gifts";

export const appRouter = router({
  example: exampleRouter,
  gift: giftRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
