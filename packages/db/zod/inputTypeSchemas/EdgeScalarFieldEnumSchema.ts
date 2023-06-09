import { z } from 'zod';

export const EdgeScalarFieldEnumSchema = z.enum(['id','label','source','target']);

export default EdgeScalarFieldEnumSchema;
