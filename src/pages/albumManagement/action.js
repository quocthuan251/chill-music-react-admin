export const GET_LIST_ALBUMS = 'HOME/GET_LIST_ALBUMS';
export const GET_LIST_ALBUMS_SUCCESS = 'HOME/GET_LIST_ALBUMS_SUCCESS';
export const GET_LIST_ALBUMS_FAIL = 'HOME/GET_LIST_ALBUMS_FAIL';
export const GET_ALL_ALBUM = 'ALBUM/GET_ALL_ALBUM';
export const GET_ALL_ALBUM_SUCCESS = 'ALBUM/GET_ALL_ALBUM_SUCCESS';
export const GET_ALL_ALBUM_FAIL = 'ALBUM/GET_ALL_ALBUM_FAIL';

export const getListAlbum = () => {
	return {
		type: GET_LIST_ALBUMS,
	};
};
export const getAllAlbum = (payload) => {
	return {
		type: GET_ALL_ALBUM,
		payload,
	};
};
