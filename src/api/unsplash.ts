import axios, { AxiosResponse } from 'axios';

interface Response {
  response: AxiosResponse<any> | undefined;
  error: any;
}

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Q6HmKpVM8DuW6QgUYa7MOPQ9kmCo416CItO1yP-BzpM',
  },
});

export const getImages = async (url: string, term: string) => {
  let response: Response['response'], error: Response['error'];
  try {
    response = await unsplash.get(url, {
      params: { query: term },
    });
  } catch (e) {
    error = e.toJSON();
  }
  return { images: response?.data.results, error };
};
