import axios from 'axios';

export const getListAlbum = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://localhost:8081/album?page=1&limit=4`,
		method: method,
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwODkxMTc3LCJleHAiOjE2MTE0OTU5Nzd9.lUwpuhjsg0XlnaaqBsXO6d6x_-wsPrggd0cyzeNy9RNCi27e6qQjpLcEqKY5ZCZfCAfdpGIIHrBo7Jg4Nx0V-g',
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};

export const getAllAlbum = (payload, method = 'GET') => {
	const { page, limit, query } = payload;
	return axios({
		url: `https://chill-music-nodejs.herokuapp.com/api/albums?page=${page}&limit=${limit}&q=${query}`,
		method: method,
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
		},
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
