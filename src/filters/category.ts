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

export const categoryFilter = z.union([categoryNameFilter, categoryIdFilter]);

export type CategoryFilter = z.infer<typeof categoryFilter>;
