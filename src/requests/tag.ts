import { CategorySchema, TagSchema } from "@/models";
import { z } from "zod";

const create = z.object({
  label: z.string(),
  allowedCategories: z.array(CategorySchema).optional(),
});

const readMany = z.object({
  limit: z.coerce.number().optional(),
  allowedCategories: z.array(CategorySchema).optional(),
});

const update = TagSchema.deepPartial();

export type TagRequest = { [Property in (keyof typeof TagRequestSchema)]: z.infer<typeof TagRequestSchema[Property]> }

export const TagRequestSchema = {
  create,
  readMany,
  update,
} as const;
