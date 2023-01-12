import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com/auto-complete'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '805781675fmshb809fae0a8be11cp17f9ebjsncd5c659356c0',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}
