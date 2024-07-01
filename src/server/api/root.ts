import { categoryRouter } from "./routers/category";
import { subcategoryRouter } from "./routers/subcategory";
import { storageRouter } from "./routers/storage";
import { transactionRouter } from "./routers/transaction";
import { debtRouter } from "./routers/debt";
import { businessRouter } from "./routers/business";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  subcategory: subcategoryRouter,
  transaction: transactionRouter,
  storage: storageRouter,
  debt: debtRouter,
  business: businessRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
