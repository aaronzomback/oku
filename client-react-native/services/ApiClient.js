import {REACT_APP_BASE_URL, REACT_APP_WORD_API_KEY} from '../env';

const apiUrl = REACT_APP_BASE_URL + REACT_APP_WORD_API_KEY;

export const fetchRequest = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}