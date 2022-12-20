import { router } from "../trpc";
import { exampleRouter } from "./example";
import { giftRouter } from "./gifts";
import { tvShowRouter } from "./tvshow";

export const appRouter = router({
  example: exampleRouter,
  gift: giftRouter,
  tvshow: tvShowRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
