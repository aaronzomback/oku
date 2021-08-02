
const baseUrl = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key='
const apiKey = '3r9kgm7xx911g2x75219kaixb2f0z8k4xtisyh65ms80nhfss'
const apiUrl = baseUrl + apiKey;

export const fetchRequest = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}