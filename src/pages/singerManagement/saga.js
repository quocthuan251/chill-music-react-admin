import { put, call, takeEvery } from 'redux-saga/effects';
import {
	GET_LIST_SINGERS,
	GET_LIST_SINGERS_SUCCESS,
	GET_LIST_SINGERS_FAIL,
} from './action';
import * as Api from './service';

function* getDataSinger({ payload }) {
	try {
		const { response, error } = yield call(Api.getListSinger, payload);
		console.log('log in saga nghệ sĩ');
		console.log(response.data.data);
		yield put({
			type: GET_LIST_SINGERS_SUCCESS,
			data: response.data.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
		yield put({ type: GET_LIST_SINGERS_FAIL, error: error });
	}
}

// Config API to call once or many
function* singerFlow() {
	yield takeEvery(GET_LIST_SINGERS, getDataSinger);
}

export default singerFlow;
