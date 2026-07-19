import {
    coverImageSection,
    dateTimeSection,
    fatherSection,
    locationDetailsSection,
} from './shared-sections';
import { EventFormSchema } from './types';

export const nightBeforeBrisSchema: EventFormSchema = {
  category: 'night-before-bris',
  title: 'Night Before Bris',
  sections: [
    coverImageSection,
    fatherSection,
    locationDetailsSection({ includeBrisAddress: true }),
    dateTimeSection({ timeLabel: 'Morning Prayer Time' }),
  ],
};