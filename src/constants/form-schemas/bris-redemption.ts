import {
    coverImageSection,
    dateTimeSection,
    fatherSection,
    locationDetailsSection,
} from './shared-sections';
import { EventFormSchema } from './types';

export const brisRedemptionSchema: EventFormSchema = {
  category: 'bris-redemption',
  title: 'Bris / Redemption',
  sections: [
    coverImageSection,
    fatherSection,
    locationDetailsSection(),
    dateTimeSection({ title: 'Venue & Date' }),
  ],
};