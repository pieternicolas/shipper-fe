export type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  cell: string;
  id: {
    name: string;
    value: string;
  };
  dob: {
    date: string; // Date
    age: number;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
