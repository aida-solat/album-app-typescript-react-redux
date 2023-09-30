const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchAlbums() {
  const response = await fetch(`${API_BASE_URL}/albums`);
  return response.json();
}

export async function fetchPhotos(albumId: number) {
  const response = await fetch(`${API_BASE_URL}/photos?albumId=${albumId}`);
  return response.json();
}
