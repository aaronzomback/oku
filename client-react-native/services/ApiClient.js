import { WORD_API_KEY, BASE_URL } from '../env';

const apiUrl = BASE_URL + WORD_API_KEY;

export const fetchRequest = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}