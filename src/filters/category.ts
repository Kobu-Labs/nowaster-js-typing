import { z } from "zod";

const categoryNameFilter = z.object({
  name: z
    .object({
      value: z.array(z.string()),
      mode: z.union([z.literal("all"), z.literal("some")]),
    })
    .or(
      z.object({
        value: z.string(),
        mode: z.literal("exact"),
      }),
    ),
});

const categoryIdFilter = z.object({
  id: z
    .object({
      value: z.array(z.string()),
      mode: z.union([z.literal("all"), z.literal("some")]),
    })
    .or(
      z.object({
        value: z.string(),
        mode: z.literal("exact"),
      }),
    ),
});

export const categoryFilter = z
  .object({
    ...categoryNameFilter.shape,
    ...categoryIdFilter.shape,
  })
  .partial();

export type CategoryFilter = z.infer<typeof categoryFilter>;
