import { z } from 'zod';

export const NodeScalarFieldEnumSchema = z.enum(['id','type','mindMapId']);

export default NodeScalarFieldEnumSchema;
