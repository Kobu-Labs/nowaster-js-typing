import { ScheduledSessionWithIdSchema } from "@/models";
import { z } from "zod";

const create = ScheduledSessionWithIdSchema;
const readMany = z.array(ScheduledSessionWithIdSchema);
const readById = z.array(ScheduledSessionWithIdSchema);
const update = ScheduledSessionWithIdSchema;
const remove = ScheduledSessionWithIdSchema;
const getCategories = z.array(z.string());

export type ScheduledSessionResponse = {
    [Property in (keyof typeof ScheduledSessionResponseSchema)]: z.infer<typeof ScheduledSessionResponseSchema[Property]>
}

export const ScheduledSessionResponseSchema = {
  create,
  readById,
  update,
  remove,
  getCategories,
  readMany,
} as const;
