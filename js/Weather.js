
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90ple091djsnfb21cde4eb87',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidai.com/v1/weather?city=Seattle',options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db06c7285dmsha45c5e801d15f1dp187c56jsn07402d1ffacd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}