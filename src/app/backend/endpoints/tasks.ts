import api from '..';

const TASKS_API = 'api/doses';

export const tasksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], null>({
      query: () => ({
        url: `${TASKS_API}/today`,
      }),
      providesTags: ['Task'],
    }),
    checkTask: build.mutation<null, number>({
      query: (id) => ({
        url: `${TASKS_API}/${id}/check`,
        method: 'PUT',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const { useGetTasksQuery, useCheckTaskMutation } = tasksApi;
