import {
	GET_LIST_ALBUMS,
	GET_LIST_ALBUMS_SUCCESS,
	GET_LIST_ALBUMS_FAIL,
	GET_ALL_ALBUM,
	GET_ALL_ALBUM_SUCCESS,
	GET_ALL_ALBUM_FAIL,
} from './action';
import { openNotificationWithIcon } from '../../utils/index';
import { STATUS } from '../../common/enums/status';
const initialState = {
	data: [],
	dataAllAlbum: [],
	isLoading: false,
	error: '',
};

const reducerAlbum = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_ALBUMS: {
			return { ...state, isLoading: true, error: '' };
		}
		case GET_LIST_ALBUMS_SUCCESS: {
			// openNotificationWithIcon(STATUS.SUCCESS, 'Update Succeeded', 3);
			return { ...state, data: action.data, isLoading: false };
		}
		case GET_LIST_ALBUMS_FAIL: {
			return { ...state, isLoading: false, error: action.error };
		}
		case GET_ALL_ALBUM:
			return {
				...state,
				isLoading: true,
			};
		case GET_ALL_ALBUM_SUCCESS:
			return {
				...state,
				dataAllAlbum: action.data,
			};
		case GET_ALL_ALBUM_FAIL:
			return {
				...state,
			};
		default:
			return state;
	}
};
export default reducerAlbum;
