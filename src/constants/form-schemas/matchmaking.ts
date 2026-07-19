import { coverImageSection, extendedFamilySection, matchmakerDateSection } from './shared-sections';
import { EventFormSchema } from './types';

export const matchmakingSchema: EventFormSchema = {
  category: 'matchmaking',
  title: 'Matchmaking',
  sections: [
    coverImageSection,
    extendedFamilySection('Groom'),
    extendedFamilySection('Bride'),
    matchmakerDateSection,
  ],
};