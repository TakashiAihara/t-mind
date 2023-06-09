import { z } from 'zod';

/////////////////////////////////////////
// NODE SCHEMA
/////////////////////////////////////////

export const NodeSchema = z.object({
  id: z.string().cuid(),
  type: z.string(),
  mindMapId: z.string().nullable(),
})

export type Node = z.infer<typeof NodeSchema>

export default NodeSchema;
