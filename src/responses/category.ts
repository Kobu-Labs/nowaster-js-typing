import { CategorySchema } from "@/models/category";
import { HasID } from "@/utils";
import { z } from "zod";

export const CategoryResponseSchema = {
  create: CategorySchema.merge(HasID),
  readMany: z.array(CategorySchema.merge(HasID)),
  readById: CategorySchema.merge(HasID).nullable(),
  update: CategorySchema.merge(HasID),
};

export type CategoryResponse = {
    [Property in (keyof typeof CategoryResponseSchema)]: z.infer<typeof CategoryResponseSchema[Property]>;
};

