export const GET_LIST_SONGS = 'HOME/GET_LIST_SONGS';
export const GET_LIST_SONGS_SUCCESS = 'HOME/GET_LIST_SONGS_SUCCESS';
export const GET_LIST_SONGS_FAIL = 'HOME/GET_LIST_SONGS_FAIL';

export const DELETE_SONG_BY_ID = 'HOME/DELETE_SONG_BY_ID';
export const DELETE_SONG_BY_ID_SUCCESS = 'HOME/DELETE_SONG_BY_ID_SUCCESS';
export const DELETE_SONG_BY_ID_FAIL = 'HOME/DELETE_SONG_BY_ID_FAIL';

export const getListSong = (payload) => {
	return {
		type: GET_LIST_SONGS,
		payload,
	};
};

export const deleteSongById = (payload) => {
	return {
		type: DELETE_SONG_BY_ID,
		payload,
	};
};
