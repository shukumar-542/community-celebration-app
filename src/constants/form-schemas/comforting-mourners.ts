import { coverImageSection, deceasedSection, mournersSection, shivaDetailsSection } from './shared-sections';
import { EventFormSchema } from './types';

export const comfortingMournersSchema: EventFormSchema = {
  category: 'comforting-mourners',
  title: 'Comforting Mourners',
  sections: [
    coverImageSection, 
    deceasedSection, 
    mournersSection, 
    shivaDetailsSection
  ],
};  