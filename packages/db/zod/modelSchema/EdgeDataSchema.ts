import { z } from 'zod';

/////////////////////////////////////////
// EDGE DATA SCHEMA
/////////////////////////////////////////

export const EdgeDataSchema = z.object({
  id: z.string().cuid(),
  label: z.string(),
  nodeId: z.string(),
})

export type EdgeData = z.infer<typeof EdgeDataSchema>

export default EdgeDataSchema;
