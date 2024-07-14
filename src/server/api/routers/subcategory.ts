import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { subcategories } from "~/server/db/schema";

export const subcategoryRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
        name: z.string().min(1),
        icon: z.string(),
        categoryId: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
     
      await ctx.db.insert(subcategories).values({
        name: input.name,
        icon: input.icon,
        categoryId: input.categoryId,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.subcategories.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
