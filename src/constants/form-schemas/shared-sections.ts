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

export const parentInLawSection = (
  number: 1 | 2,
  options?: { simple?: boolean }
): FormSection => ({
  title: `Parent-in-law #${number}`,
  fields: options?.simple
    ? [
        {
          key: `parentInLaw${number}FullName`,
          label: 'Full Name',
          type: 'text',
          placeholder: number === 1 ? 'e.g. Rabbi Shlomo Levin' : 'e.g. Rabbi Dovid Berger',
          required: true,
        },
      ]
    : [
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


export const venueDateSection = (options?: {
  venueLabel?: string;
  venuePlaceholder?: string;
  timeLabel?: string;
}): FormSection => ({
  title: 'Venue & Date',
  fields: [
    {
      key: 'venueName',
      label: options?.venueLabel ?? 'Venue Name',
      type: 'text',
      placeholder: options?.venuePlaceholder ?? 'e.g. The Grand Ballroom',
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
    { key: 'eventTime', label: options?.timeLabel ?? 'Time', type: 'time' },
  ],
});

export const barMitzvahBoySection: FormSection = {
  title: 'Bar Mitzvah Boy',
  fields: [
    {
      key: 'boyName',
      label: "Boy's Name",
      type: 'text',
      placeholder: 'e.g. Eliyahu Goldstein',
      required: true,
    },
  ],
};

export const fatherSection: FormSection = {
  title: 'Father',
  fields: [
    {
      key: 'fatherName',
      label: "Father's Name",
      type: 'text',
      placeholder: 'e.g. Rabbi Menachem Goldstein',
      required: true,
    },
    {
      key: 'fatherSonOfRabbi',
      label: 'Son of Rabbi',
      type: 'text',
      placeholder: 'e.g. Rabbi Yisroel Goldstein',
    },
    {
      key: 'fatherSonInLawOfRabbi',
      label: 'Son-in-law of Rabbi',
      type: 'text',
      placeholder: 'e.g. Rabbi Chaim Weiss',
    },
  ],
};

export const locationDetailsSection = (options?: {
  includeBrisAddress?: boolean;
}): FormSection => ({
  title: 'Location Details',
  fields: [
    {
      key: 'gatheringAddress',
      label: 'Address',
      type: 'location',
      placeholder: 'Full address',
      required: true,
    },
    {
      key: 'whoseHouse',
      label: 'Whose House',
      type: 'text',
      placeholder: 'e.g. Home of the father',
    },
    ...(options?.includeBrisAddress
      ? [
          {
            key: 'brisAddress',
            label: 'Bris Address',
            type: 'location' as const,
            placeholder: "Address of next day's bris",
            required: true,
          },
        ]
      : []),
  ],
});

export const dateTimeSection = (options?: {
  timeLabel?: string;
  title?: string;
}): FormSection => ({
  title: options?.title ?? 'Date & Time',
  fields: [
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
    { key: 'eventTime', label: options?.timeLabel ?? 'Time', type: 'time' },
  ],
});

export const extendedFamilySection = (role: 'Groom' | 'Bride'): FormSection => ({
  title: role,
  fields: [
    {
      key: `${role.toLowerCase()}Name`,
      label: `${role}'s Name`,
      type: 'text',
      placeholder: role === 'Groom' ? 'e.g. Shimon Rosenberg' : 'e.g. Rivka Weissberg',
      required: true,
    },
    {
      key: `${role.toLowerCase()}FatherName`,
      label: "Father's Name",
      type: 'text',
      placeholder: role === 'Groom' ? 'e.g. Rabbi Aharon Rosenberg' : 'e.g. Rabbi Mordechai Weissberg',
    },
    {
      key: `${role.toLowerCase()}SonOfRabbi`,
      label: 'Son of Rabbi',
      type: 'text',
      placeholder: role === 'Groom' ? 'e.g. Rabbi Yitzchak Levy' : 'e.g. Rabbi Binyamin Weissberg',
    },
    {
      key: `${role.toLowerCase()}SonInLawOfRabbi`,
      label: 'Son-in-law of Rabbi',
      type: 'text',
      placeholder: role === 'Groom' ? 'e.g. Rabbi Avraham Klein' : 'e.g. Rabbi Yakov Engel',
    },
  ],
});

export const matchmakerDateSection: FormSection = {
  title: 'Matchmaker & Date',
  fields: [
    {
      key: 'matchmakerName',
      label: 'Matchmaker Name',
      type: 'text',
      placeholder: 'e.g. Rabbi Chaim Smelber',
    },
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
    { key: 'eventTime', label: 'Time', type: 'time' },
  ],
};
export const deceasedSection: FormSection = {
  title: 'Deceased',
  fields: [
    {
      key: 'deceasedName',
      label: 'Name of Deceased',
      type: 'text',
      placeholder: 'e.g. Reb Yisroel ben Moshe',
      required: true,
    },
    {
      key: 'deceasedRelation',
      label: 'Wife of / Son of / Daughter of',
      type: 'text',
      placeholder: 'e.g. Son of Rabbi Moshe Greenfeld',
    },
  ],
};

export const mournersSection: FormSection = {
  title: 'Mourners',
  fields: [
    {
      key: 'mournersNames',
      label: 'Names of Mourners',
      type: 'textarea',
      placeholder: "List all mourners' names...",
    },
  ],
};

export const shivaDetailsSection: FormSection = {
  title: 'Shiva Details',
  fields: [
    {
      key: 'shivaAddress',
      label: 'Address',
      type: 'location',
      placeholder: 'Shiva house address',
      required: true,
    },
    {
      key: 'shivaSittingUntil',
      label: 'Sitting Until',
      type: 'text',
      placeholder: 'e.g. Thursday evening',
    },
    { key: 'shivaDate', label: 'Date', type: 'date', required: true },
  ],
};
export const locationDateSection: FormSection = {
  title: 'Location & Date',
  fields: [
    {
      key: 'venueAddress',
      label: 'Address',
      type: 'location',
      placeholder: 'Full address',
      required: true,
    },
    {
      key: 'whoseHouse',
      label: 'Whose House',
      type: 'text',
      placeholder: 'e.g. Host family residence',
    },
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
  ],
};

export const familiesSection: FormSection = {
  title: 'Families',
  fields: [
    {
      key: 'parentInLaw1Name',
      label: 'Parent-in-law #1 Name',
      type: 'text',
      placeholder: 'e.g. Rabbi Boruch Lefkowitz',
      required: true,
    },
    {
      key: 'parentInLaw2Name',
      label: 'Parent-in-law #2 Name',
      type: 'text',
      placeholder: 'e.g. Rabbi Alter Schwartz',
      required: true,
    },
  ],
};

export const locationScheduleSection: FormSection = {
  title: 'Location & Schedule',
  fields: [
    {
      key: 'venueAddress',
      label: 'Address',
      type: 'location',
      placeholder: 'Synagogue address',
      required: true,
    },
    {
      key: 'whoseHouse',
      label: 'Whose House',
      type: 'text',
      placeholder: "e.g. Home of the groom's father",
    },
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
    { key: 'morningPrayerTime', label: 'Morning Prayer Time', type: 'time' },
    {
      key: 'ladiesKiddush',
      label: "Ladies' Kiddush (optional)",
      type: 'text',
      placeholder: 'e.g. the Schwartz residence, 12:00 PM',
    },
  ],
};
export const locationDateCombinedSection = (options?: {
  timeLabel?: string;
  addressPlaceholder?: string;
}): FormSection => ({
  title: 'Location & Date',
  fields: [
    {
      key: 'venueAddress',
      label: 'Address',
      type: 'location',
      placeholder: options?.addressPlaceholder ?? 'Full address',
      required: true,
    },
    {
      key: 'whoseHouse',
      label: 'Whose House',
      type: 'text',
      placeholder: 'e.g. Home of the father',
    },
    { key: 'eventDate', label: 'Date', type: 'date', required: true },
    { key: 'eventTime', label: options?.timeLabel ?? 'Time', type: 'time' },
  ],
});