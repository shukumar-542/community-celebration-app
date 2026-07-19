import { barMitzvahBoySection, coverImageSection, fatherSection, venueDateSection } from './shared-sections';
import { EventFormSchema } from './types';

export const barMitzvahSchema: EventFormSchema = {
    category: 'bar-mitzvah',
    title: 'Bar Mitzvah',
    sections: [
        coverImageSection,
        barMitzvahBoySection,
        fatherSection,
        venueDateSection(
            {
                venueLabel: 'Synagogue / Venue',
                venuePlaceholder: 'e.g. Congregation Chevo Shalom',
                timeLabel: 'Service Time',
            }
        )
    ],
};