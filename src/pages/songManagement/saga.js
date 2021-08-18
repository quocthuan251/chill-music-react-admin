import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_SONGS,
	GET_LIST_SONGS_SUCCESS,
	GET_LIST_SONGS_FAIL,
	DELETE_SONG_BY_ID,
	DELETE_SONG_BY_ID_SUCCESS,
	DELETE_SONG_BY_ID_FAIL,
} from './actions';
import * as Api from './service';

function* getDataSong({ payload }) {
	try {
		const { response, error } = yield call(Api.getListSong, payload);
		console.log('log in sága');
		console.log(response.data.data);
		yield put({
			type: GET_LIST_SONGS_SUCCESS,
			data: response.data.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_SONGS_FAIL, error: error });
	}
}

function* deleteSongById({ payload }) {
	try {
		const { response, error } = yield call(Api.deleteSongId, payload);
		console.log('log in saga delete');
		console.log(response.data.data);
		yield put({
			type: DELETE_SONG_BY_ID_SUCCESS,
			data: response.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: DELETE_SONG_BY_ID_FAIL, error: error });
	}
}

// Config API to call once or many
function* songFlow() {
	yield takeEvery(GET_LIST_SONGS, getDataSong);
	yield takeEvery(DELETE_SONG_BY_ID, deleteSongById);
}

export default songFlow;
