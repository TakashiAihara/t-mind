import { z } from 'zod';

export const EdgeStyleScalarFieldEnumSchema = z.enum(['id','background','color','nodeId']);

export default EdgeStyleScalarFieldEnumSchema;
