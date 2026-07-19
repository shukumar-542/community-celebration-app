import { coverImageSection, groomSection, parentInLawSection, venueDateSection } from './shared-sections';
import { EventFormSchema } from './types';

export const engagementSchema: EventFormSchema = {
    category: 'engagement',
    title: 'Engagement Agreement',
    sections: [
        coverImageSection,
        groomSection,
        parentInLawSection(1),
        parentInLawSection(2),
        venueDateSection,
    ],
};