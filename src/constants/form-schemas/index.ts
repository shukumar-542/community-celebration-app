import { engagementSchema } from './engagement';
import { sevenBlessingsSchema } from './seven-blessings';
import { EventFormSchema } from './types';
import { weddingSchema } from './wedding';


export const formSchemas: Record<string, EventFormSchema> = {
    wedding: weddingSchema,
    'seven-blessings': sevenBlessingsSchema,
    "engagement": engagementSchema,
};  