import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface StoryItem {
  id: number;
  description: string;
  yearTag: string;
}

interface ApiResponse {
  message: string | null;
  succeeded: boolean;
  code: number;
  data: StoryItem[];
}

// Define API slice
export const ourStoryApi = createApi({
  reducerPath: 'ourStoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://81.208.171.22:7070/api' }),
  endpoints: (builder) => ({
    getAllStories: builder.query<StoryItem[], void>({
      query: () => '/OurStory/GetAll',
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
});

export const { useGetAllStoriesQuery } = ourStoryApi;
