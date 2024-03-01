import api from '..';

const USERS_API = 'api';

export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserI, UserAuthI>({
      query: (userAuth) => ({
        url: `${USERS_API}/login`,
        method: 'POST',
        body: userAuth,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;
