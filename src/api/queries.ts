import { AxiosRequestConfig } from 'axios';

import { User } from './types';

export type GetUsersReturnProps = {
  results: User[];
};
export const GetUsers: AxiosRequestConfig = {
  url: '/',
  params: {
    results: 30,
  },
  method: 'GET',
};
