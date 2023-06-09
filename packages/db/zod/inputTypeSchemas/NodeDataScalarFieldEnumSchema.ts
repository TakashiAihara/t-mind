import { z } from 'zod';

export const NodeDataScalarFieldEnumSchema = z.enum(['id','label','nodeId']);

export default NodeDataScalarFieldEnumSchema;
