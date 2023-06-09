import { z } from 'zod';

/////////////////////////////////////////
// NODE DATA SCHEMA
/////////////////////////////////////////

export const NodeDataSchema = z.object({
  id: z.string().cuid(),
  label: z.string(),
  nodeId: z.string(),
})

export type NodeData = z.infer<typeof NodeDataSchema>

export default NodeDataSchema;
