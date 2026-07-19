import { coverImageSection, parentInLawSection, venueDateSection } from './shared-sections';
import { EventFormSchema } from './types';

export const sevenBlessingsSchema: EventFormSchema = {
  category: 'seven-blessings',
  title: 'Seven Blessings',
  sections: [
    coverImageSection, 
    parentInLawSection(1), 
    parentInLawSection(2), 
    venueDateSection
  ],
};