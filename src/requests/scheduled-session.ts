import { TagWithIdSchema } from "@/models";
import { CategorySchema } from "@/models/category";
import { CategoryRequestSchema } from "@/requests/category";
import { z } from "zod";

const create = z.object({
  category: CategoryRequestSchema.create,
  description: z.string().max(50).nullable(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  tags: z.array(TagWithIdSchema),
});

const readById = z.object({
  id: z.string().uuid(),
});

const readMany = z.object({
  limit: z.coerce.number().optional(),
  fromStartTime: z.coerce.date().optional(),
  toStartTime: z.coerce.date().optional(),
  fromEndTime: z.coerce.date().optional(),
  toEndTime: z.coerce.date().optional(),
  category: z
    .object({
      label: z
        .object({
          exact: z.string().optional(),
          some: z.array(z.string()).optional(),
        })
        .optional(),
    })
    .optional(),
  tags: z
    .object({
      label: z
        .object({
          every: z.array(z.string()).optional(),
          some: z.array(z.string()).optional(),
        })
        .optional(),
    })
    .optional(),
});

const update = z.object({
  id: z.string().uuid(),
  category: CategoryRequestSchema.create,
  description: z.string().max(50).optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
});

const remove = z.object({
  id: z.string().uuid(),
});

export type ScheduledSessionRequest = {
  [Property in keyof typeof ScheduledSessionRequestSchema]: z.infer<
    (typeof ScheduledSessionRequestSchema)[Property]
  >;
};

export const ScheduledSessionRequestSchema = {
  readById,
  create,
  readMany,
  update,
  remove,
} as const;
