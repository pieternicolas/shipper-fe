export type SearchValues = {
  name: string;
};

export const FIELDS = {
  name: 'name',
} as const;

export const PLACEHOLDER = {
  [FIELDS.name]: 'Cari Driver',
};

export const searchDefaultValues: SearchValues = {
  [FIELDS.name]: '',
};
