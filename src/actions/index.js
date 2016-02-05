import axios from 'axios';

const API_KEY = '018bf44246c3cce7b87414648a2535f9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//will make the API request
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	//this will return a promise
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}
