import { z } from 'zod';

/////////////////////////////////////////
// EDGE SCHEMA
/////////////////////////////////////////

export const EdgeSchema = z.object({
  id: z.string().cuid(),
  label: z.string(),
  source: z.string(),
  target: z.string(),
})

export type Edge = z.infer<typeof EdgeSchema>

export default EdgeSchema;
