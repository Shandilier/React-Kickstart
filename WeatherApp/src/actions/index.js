import axios from 'axios';
const API_KEY = "b2f7dbabdc44a74bb23faf41a7078ecf";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    console.log(city)
    const url = `${ROOT_URL}&q=${city},us`
    console.log(url)
    const request = axios.get(url);
    console.log(request)
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}