const axios = require('axios');

// export async function fetchDataKeyword(keyword) {
//   try {
//     let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`);
//     if (!response.ok) {
//       throw new Error("HTTP error, status = " + response.status);
//     }
//     return await response.json();
//   } catch (err) {
//     console.error(err);
//   }
// }

export async function fetchDataKeyword() {
  try {
    let config = {
      insecureHTTPParser: true
    }
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', config);
    return response.data
  } catch (error) {
    console.error(error);
  }
}