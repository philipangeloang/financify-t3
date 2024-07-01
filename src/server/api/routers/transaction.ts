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
        name: z.string().min(1),
        categoryType: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(categories).values({
        name: input.name,
        categoryType: input.categoryType,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.categories.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
