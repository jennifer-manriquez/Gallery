////https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q5582&format=json
//https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}
//'https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&titles=La_Cha%C3%AEne_Info&sites=enwiki|frwiki&origin=*'

const axios = require('axios');

export async function fetchWikiData(id) {
  try {
    const response = await axios.get(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q${id}&format=json&origin=*`);
    if (response.status == 200) {
      return response.data
    } else {
      throw new Error(`Error HTTP ${response.statusCode}`)
    }
  } catch (error) {
    console.error(error);
  }
}
