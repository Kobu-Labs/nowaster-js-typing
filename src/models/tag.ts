import { CategorySchema } from "@/models/category";
import { HasID } from "@/utils";
import { z } from "zod";

export const TagSchema = z.object({
  label: z.string(),
  allowedCategories: z.array(CategorySchema),
});


export const TagWithIdSchema = TagSchema.merge(HasID);

export type Tag = z.infer<typeof TagSchema>
export type TagWithId = z.infer<typeof TagWithIdSchema>
