import {
	GET_LIST_SONGS,
	GET_LIST_SONGS_SUCCESS,
	GET_LIST_SONGS_FAIL,
	DELETE_SONG_BY_ID,
	DELETE_SONG_BY_ID_SUCCESS,
	DELETE_SONG_BY_ID_FAIL,
} from './actions';
import { openNotificationWithIcon } from '../../utils/index';
import { STATUS } from '../../common/enums/status';
const initialState = {
	data: [],
	page: 1,
	count: 0,
	loading: false,
	error: '',
};

const reducerSong = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_SONGS: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_SONGS_SUCCESS: {
			return {
				...state,
				data: action.data,
				page: action.page,
				count: action.count,
				loading: false,
			};
		}
		case DELETE_SONG_BY_ID_FAIL: {
			openNotificationWithIcon(STATUS.ERROR, 'Error', 3);
			return { ...state, loading: false, error: action.error };
		}

		case DELETE_SONG_BY_ID: {
			return { ...state, loading: true };
		}
		case DELETE_SONG_BY_ID_SUCCESS: {
			const valueToRemove = action.data.data;
			const newData = state.data.songs.filter(
				(item) => item._id !== valueToRemove._id
			);

			console.log('log in delete sog');
			console.log(state.data);
			console.log(newData);
			console.log(action.data);
			openNotificationWithIcon(STATUS.SUCCESS, 'Delete Succeeded', 3);
			return {
				...state,
				data: newData,
				loading: false,
			};
		}
		case GET_LIST_SONGS_FAIL: {
			openNotificationWithIcon(STATUS.ERROR, 'Delete failed', 3);
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerSong;
