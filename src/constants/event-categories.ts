export interface EventCategory {
  key: string;
  label: string;
  icon: string; 
}

export const eventCategories: EventCategory[] = [
  { key: 'wedding', label: 'Wedding', icon: '💍' },
  { key: 'seven-blessings', label: 'Seven Blessings', icon: '🎊' },
  { key: 'engagement', label: 'Engagement Agreement', icon: '💛' },
  { key: 'bar-mitzvah', label: 'Bar Mitzvah', icon: '📖' },
  { key: 'night-before-bris', label: 'Night Before Bris', icon: '🌙' },
  { key: 'bris-redemption', label: 'Bris / Redemption', icon: '🕊️' },
  { key: 'matchmaking', label: 'Matchmaking', icon: '🤝' },
  { key: 'comforting-mourners', label: 'Comforting Mourners', icon: '🕯️' },
  { key: 'shalom-zachar', label: 'Shalom Zachar', icon: '👶' },
  { key: 'kiddush', label: 'Kiddush', icon: '🍷' },
  { key: 'shalom-zachar-bris', label: 'Shalom Zachar / Night Before Bris', icon: '🌟' },
  { key: 'aufruf', label: 'Aufruf', icon: '📯' },
  { key: 'sabbath-seven-blessings', label: 'Sabbath Seven Blessings', icon: '🕯️' },
];