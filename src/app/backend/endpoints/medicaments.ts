import api from '..';

const MEDICAMENTS_API = 'api/medicines/patient/1';

export const medApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMedicaments: build.query<Medicament[], null>({
      query: () => ({
        url: `${MEDICAMENTS_API}`,
      }),
      providesTags: ['Medicament'],
    }),
  }),
});

export const { useGetMedicamentsQuery } = medApi;
