const axios = require('axios');

export async function fetchWikipediaExtract(title) {
  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${title}&origin=*`);
    if (response.status == 200) {
      return response.data
    } else {
      throw new Error(`Error HTTP ${response.statusCode}`)
    }
  } catch (error) {
    console.error(error);
  }
}
