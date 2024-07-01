import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { businesses } from "~/server/db/schema";

export const businessRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
        name: z.string().min(1),
        profit: z.number().nonnegative(),
        loss: z.number().nonnegative(),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(businesses).values({
        name: input.name,
        profit: input.profit,
        loss: input.loss,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.businesses.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
