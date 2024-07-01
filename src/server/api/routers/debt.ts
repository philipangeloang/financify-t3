import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { debts } from "~/server/db/schema";

export const debtRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
        name: z.string().min(1),
        amount: z.number().nonnegative(),
        isPaid: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(debts).values({
        name: input.name,
        amount: input.amount,
        isPaid: input.isPaid,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.debts.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
