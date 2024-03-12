import { TagWithIdSchema } from "@/models";
import { z } from "zod";


const readMany = z.array(TagWithIdSchema);
const create = TagWithIdSchema;
const update = TagWithIdSchema;

export type TagResponse = {
    [Property in (keyof typeof TagResponseSchema)]: z.infer<typeof TagResponseSchema[Property]>
}

export const TagResponseSchema = {
  create,
  readMany,
  update
} as const;
