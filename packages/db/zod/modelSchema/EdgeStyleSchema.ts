import { z } from 'zod';

/////////////////////////////////////////
// EDGE STYLE SCHEMA
/////////////////////////////////////////

export const EdgeStyleSchema = z.object({
  id: z.string().cuid(),
  background: z.string(),
  color: z.string(),
  nodeId: z.string(),
})

export type EdgeStyle = z.infer<typeof EdgeStyleSchema>

export default EdgeStyleSchema;
