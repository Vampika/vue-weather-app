const api_key = "39d23d21c34e2646ebcd6c4321ee3b87";
const url_base = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = (query) => {
	const url = `${url_base}weather?q=${query}&units=metric&APPID=${api_key}`;

	return fetch(url)
		.then(res => res.json())
		.catch(err => console.error('Error fetching weather data:', err));

}