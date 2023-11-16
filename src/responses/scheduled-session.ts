import { ScheduledSessionWithIdSchema } from "@/models";
import { z } from "zod";

const create = ScheduledSessionWithIdSchema;
const readMany = z.array(ScheduledSessionWithIdSchema);
const readById = ScheduledSessionWithIdSchema.nullable();
const update = ScheduledSessionWithIdSchema;
const remove = ScheduledSessionWithIdSchema;

export type ScheduledSessionResponse = {
    [Property in (keyof typeof ScheduledSessionResponseSchema)]: z.infer<typeof ScheduledSessionResponseSchema[Property]>
}

export const ScheduledSessionResponseSchema = {
  create,
  readById,
  update,
  remove,
  readMany,
} as const;
