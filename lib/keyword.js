const axios = require('axios');

export async function fetchDataKeyword() {
  try {
    let config = {
      insecureHTTPParser: true
    }
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=rembrandt', config);
    return response.data
  } catch (error) {
    console.error(error);
  }
}