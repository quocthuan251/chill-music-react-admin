export const GET_LIST_USERS = 'HOME/GET_LIST_USERS';
export const GET_LIST_USERS_SUCCESS = 'HOME/GET_LIST_USERS_SUCCESS';
export const GET_LIST_USERS_FAIL = 'HOME/GET_LIST_USERS_FAIL';

export const DELETE_SONG_BY_ID = 'HOME/DELETE_SONG_BY_ID';
export const DELETE_SONG_BY_ID_SUCCESS = 'HOME/DELETE_SONG_BY_ID_SUCCESS';
export const DELETE_SONG_BY_ID_FAIL = 'HOME/DELETE_SONG_BY_ID_FAIL';

export const getListUser = (payload) => {
	return {
		type: GET_LIST_USERS,
		payload,
	};
};

export const deleteSongById = (payload) => {
	return {
		type: DELETE_SONG_BY_ID,
		payload,
	};
};
