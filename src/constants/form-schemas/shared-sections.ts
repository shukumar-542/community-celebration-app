import { FormSection } from './types';

export const coverImageSection: FormSection = {
  title: '',
  fields: [{ key: 'coverImage', label: 'Choose a Cover Image', type: 'image' }],
};

export const groomSection: FormSection = {
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
};

export const parentInLawSection = (number: 1 | 2): FormSection => ({
  title: `Parent-in-law #${number}`,
  fields: [
    {
      key: `parentInLaw${number}FullName`,
      label: 'Full Name',
      type: 'text',
      placeholder: 'e.g. Rabbi Moshe Levy',
      required: true,
    },
    {
      key: `parentInLaw${number}SonOfRabbi`,
      label: 'Son of Rabbi',
      type: 'text',
      placeholder: 'e.g. Rabbi Yitzchak Levy',
    },
    {
      key: `parentInLaw${number}SonInLawOfRabbi`,
      label: 'Son-in-law of Rabbi',
      type: 'text',
      placeholder: 'e.g. Rabbi Avraham Klein',
    },
  ],
});

export const venueDateSection: FormSection = {
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
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
    { key: 'eventTime', label: 'Time', type: 'time' },
  ],
};