import { z } from 'zod';

/////////////////////////////////////////
// MIND MAP SCHEMA
/////////////////////////////////////////

export const MindMapSchema = z.object({
  id: z.string(),
  title: z.string(),
  userId: z.string(),
})

export type MindMap = z.infer<typeof MindMapSchema>

export default MindMapSchema;
