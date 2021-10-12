export async function fetchDataKeyword(keyword) {
  try {
    let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`);
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}