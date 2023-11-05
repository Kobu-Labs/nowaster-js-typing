import { HasID } from "@/utils";
import { z } from "zod";

export const RecordedSessionSchema = z.object({
  startTime: z.coerce.date(),
  category: z.string(),
  description: z.string().nullable()
});
export const RecordedSessionWithIdSchema = RecordedSessionSchema.merge(HasID);

export type RecordedSession = z.infer<typeof RecordedSessionSchema>;
export type RecordedSessionWithId = z.infer<typeof RecordedSessionWithIdSchema>;
