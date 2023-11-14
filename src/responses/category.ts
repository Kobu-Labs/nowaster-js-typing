import { CategorySchema } from "@/models/category";
import { z } from "zod";

export const CategoryResponseSchema = {
  create: CategorySchema,
  readMany: z.array(CategorySchema),
  readById: CategorySchema.nullable(),
  update: CategorySchema
};

export type CategoryResponse = {
    [Property in (keyof typeof CategoryResponseSchema)]: z.infer<typeof CategoryResponseSchema[Property]>;
};
