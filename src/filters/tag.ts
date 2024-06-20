import { z } from "zod";

const tagLabelFilter = z.object({
  label: z
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

const tagIdFilter = z.object({
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

export const tagFilter = z.union([tagLabelFilter, tagIdFilter]);

export type TagFilter = z.infer<typeof tagFilter>;
