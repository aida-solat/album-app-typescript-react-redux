export const filterAlbumsByUserId = (albums: any[], userId: number) => {
  return albums.filter((album) => album.userId === userId);
};
