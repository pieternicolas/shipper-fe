import { makeUseAxios } from 'axios-hooks';
import { axiosInstance, cache } from 'config/api';

const useAxios = makeUseAxios({
  axios: axiosInstance,
  cache,
});

export default useAxios;
