import axios from 'axios';

export const getListSong = (payload, method = 'GET') => {
	const { page, limit, query } = payload;
	console.log('log owr service');
	console.log(payload);
	return axios({
		url: `https://chill-music-nodejs.herokuapp.com/api/songs?page=${page}&limit=${limit}&q=${query}`,
		method: method,
		headers: {
			// Authorization:
			// 	'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwODkxMTc3LCJleHAiOjE2MTE0OTU5Nzd9.lUwpuhjsg0XlnaaqBsXO6d6x_-wsPrggd0cyzeNy9RNCi27e6qQjpLcEqKY5ZCZfCAfdpGIIHrBo7Jg4Nx0V-g',
			'content-type': 'application/json',
			accept: 'application/json',
		},
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};

export const deleteSongId = (id, method = 'DELETE') => {
	return axios({
		url: `https://chill-music-nodejs.herokuapp.com/api/songs/${id}`,
		method: method,
		headers: {
			// Authorization:
			// 	'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwODkxMTc3LCJleHAiOjE2MTE0OTU5Nzd9.lUwpuhjsg0XlnaaqBsXO6d6x_-wsPrggd0cyzeNy9RNCi27e6qQjpLcEqKY5ZCZfCAfdpGIIHrBo7Jg4Nx0V-g',
			'content-type': 'application/json',
			accept: 'application/json',
		},
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
