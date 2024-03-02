import api from '..';

const DOCTORS_API = 'api/doctors';

export const docApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<Doctor[], null>({
      query: () => ({
        url: `${DOCTORS_API}`,
      }),
      providesTags: ['Doctor'],
    }),
    addDoctor: build.mutation<Doctor, Doctor>({
      query: (doc) => ({
        url: `${DOCTORS_API}`,
        method: 'POST',
        body: doc,
      }),
      invalidatesTags: ['Doctor'],                                   
    }),
  }),
});

export const { useAddDoctorMutation, useGetDoctorsQuery } = docApi;
