import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { storages } from "~/server/db/schema";

export const storageRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
        name: z.string().min(1),
        amount: z.number().nonnegative(),
        storageType: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(storages).values({
        name: input.name,
        amount: input.amount,
        storageType: input.storageType,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.storages.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
