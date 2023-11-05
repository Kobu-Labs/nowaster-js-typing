import { TagWithIdSchema } from "@/models/tag";
import { HasID } from "@/utils";
import { z } from "zod";

export const ScheduledSessionSchema = z.object({
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  category: z.string(),
  description: z.string().nullable(),
  tags: z.array(TagWithIdSchema),
});
export const ScheduledSessionWithIdSchema = ScheduledSessionSchema.merge(HasID);

export type ScheduledSession = z.infer<typeof ScheduledSessionSchema>;
export type ScheduledSessionWithId = z.infer<typeof ScheduledSessionWithIdSchema>;
