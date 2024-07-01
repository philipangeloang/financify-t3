import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { transactions } from "~/server/db/schema";

export const transactionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
        category: z.string().min(1),
        storage: z.string().min(1),
        amount: z.number().nonnegative(),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(transactions).values({
        category: input.category,
        storage: input.storage,
        amount: input.amount,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.transactions.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
