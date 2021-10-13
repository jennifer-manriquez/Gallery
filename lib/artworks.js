const axios = require('axios');

export async function fetchData(object) {
  try {
    let config = {
      insecureHTTPParser: true
    }
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`, config);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
