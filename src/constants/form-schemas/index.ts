import { barMitzvahSchema } from './bar-mitzvah';
import { brisRedemptionSchema } from './bris-redemption';
import { comfortingMournersSchema } from './comforting-mourners';
import { engagementSchema } from './engagement';
import { matchmakingSchema } from './matchmaking';
import { nightBeforeBrisSchema } from './night-before-bris';
import { sevenBlessingsSchema } from './seven-blessings';
import { EventFormSchema } from './types';
import { weddingSchema } from './wedding';


export const formSchemas: Record<string, EventFormSchema> = {
    wedding: weddingSchema,
    'seven-blessings': sevenBlessingsSchema,
    "engagement": engagementSchema,
    "bar-mitzvah": barMitzvahSchema,
    'night-before-bris': nightBeforeBrisSchema,
    'bris-redemption': brisRedemptionSchema,
    'matchmaking': matchmakingSchema,
    'comforting-mourners': comfortingMournersSchema,
}; 