import { EventFormSchema } from './types';

export const weddingSchema: EventFormSchema = {
  category: 'wedding',
  title: 'Wedding',
  sections: [
    {
      title: '',
      fields: [
        { key: 'coverImage', label: 'Choose a Cover Image', type: 'image' },
      ],
    },
    {
      title: 'Groom',
      fields: [
        {
          key: 'groomName',
          label: "Groom's Name",
          type: 'text',
          placeholder: 'e.g. David Cohen',
          required: true,
        },
      ],
    },
    {
      title: 'Parent-in-law #1',
      description: 'Father / Mother of Groom or Bride',
      fields: [
        {
          key: 'parentInLaw1FullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'e.g. Rabbi Moshe Levy', 
          required: true,
        },
        {
          key: 'parentInLaw1SonOfRabbi',
          label: 'Son of Rabbi',
          type: 'text',
          placeholder: 'e.g. Rabbi Yitzchak Levy',
        },
        {
          key: 'parentInLaw1SonInLawOfRabbi',
          label: 'Son-in-law of Rabbi',
          type: 'text',
          placeholder: 'e.g. Rabbi Avraham Klein',
        },
      ],
    },
    {
      title: 'Parent-in-law #2',
      description: 'Father / Mother of the other side',
      fields: [
        {
          key: 'parentInLaw2FullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'e.g. Rabbi Moshe Levy',
          required: true,
        },
        {
          key: 'parentInLaw2SonOfRabbi',
          label: 'Son of Rabbi',
          type: 'text',
          placeholder: 'e.g. Rabbi Yitzchak Levy',
        },
        {
          key: 'parentInLaw2SonInLawOfRabbi',
          label: 'Son-in-law of Rabbi',
          type: 'text',
          placeholder: 'e.g. Rabbi Avraham Klein',
        },
      ],
    },
    {
      title: 'Venue & Date',
      fields: [
        {
          key: 'venueName',
          label: 'Venue Name',
          type: 'text',
          placeholder: 'e.g. The Grand Ballroom',
          required: true,
        },
        {
          key: 'venueAddress',
          label: 'Venue Address',
          type: 'location',
          placeholder: 'Full address',
          required: true,
        },
        {
          key: 'eventDate',
          label: 'Date',
          type: 'date',
          required: true,
        },
        {
          key: 'eventTime',
          label: 'Time',
          type: 'time',
        },
      ],
    },
  ],
};