import { z } from "zod"

export const createdPetSchema = z.object({
  id: z.number(),
  category: z.object({ id: z.number(), name: z.string() }),
  name: z.string(),
  photoUrls: z.array(z.string()),
  tags: z.array(z.object({ id: z.number(), name: z.string() })),
  status: z.string()
})

export const getPetByIdSchema = z.object({
  id: z.number(),
  category: z.object({ id: z.number(), name: z.string() }),
  name: z.string(),
  photoUrls: z.array(z.string()),
  tags: z.array(z.object({ id: z.number(), name: z.string() })),
  status: z.string()
})

export const petNotFoundSchema = z.object({
  code: z.number(),
  type: z.string(),
  message: z.string()
})
