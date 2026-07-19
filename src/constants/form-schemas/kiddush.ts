import { coverImageSection, fatherSection, locationDateCombinedSection } from './shared-sections';
import { EventFormSchema } from './types';

export const kiddushSchema: EventFormSchema = {
  category: 'kiddush',
  title: 'Kiddush',
  sections: [
    coverImageSection,
    fatherSection,
    locationDateCombinedSection({ timeLabel: 'Morning Prayer Time' }),
  ],
};