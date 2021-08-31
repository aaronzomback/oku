import {BASE_URL, REACT_WORD_API_KEY} from  "@env"

const apiUrl = BASE_URL + REACT_WORD_API_KEY;

export const fetchRequest = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}