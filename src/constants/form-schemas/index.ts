import { EventFormSchema } from './types';
import { weddingSchema } from './wedding';
// তোমার বাকি schema files import করো এখানে
// import { barMitzvahSchema } from './bar-mitzvah';
// import { sevenBlessingsSchema } from './seven-blessings';
// ... ইত্যাদি

export const formSchemas: Record<string, EventFormSchema> = {
  wedding: weddingSchema,
  // 'bar-mitzvah': barMitzvahSchema,
  // 'seven-blessings': sevenBlessingsSchema,
  // ... বাকি সব যোগ করো যেভাবে বানাবে
}; 