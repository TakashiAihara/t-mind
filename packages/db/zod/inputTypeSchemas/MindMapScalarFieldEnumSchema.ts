import { z } from 'zod';

export const MindMapScalarFieldEnumSchema = z.enum(['id','title','userId']);

export default MindMapScalarFieldEnumSchema;
