import { z } from 'zod';

export const EdgeDataScalarFieldEnumSchema = z.enum(['id','label','nodeId']);

export default EdgeDataScalarFieldEnumSchema;
