import { z } from 'zod';

/////////////////////////////////////////
// NODE POSITION SCHEMA
/////////////////////////////////////////

export const NodePositionSchema = z.object({
  id: z.string().cuid(),
  x: z.number().int(),
  y: z.number().int(),
  nodeId: z.string(),
})

export type NodePosition = z.infer<typeof NodePositionSchema>

export default NodePositionSchema;
