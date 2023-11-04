import { HasID } from "@/utils";
import { z } from "zod";

export const TagSchema = z.object({
  label: z.string()
});


export const TagWithIdSchema = TagSchema.merge(HasID);

export type Tag = z.infer<typeof TagSchema>
export type TagWithId = z.infer<typeof TagWithIdSchema>
