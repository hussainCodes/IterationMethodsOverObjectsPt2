const cities = [
  {
    "id": 301,
    "name": "New York",
    "population": 8398748,
    "country": "United States"
  },
  {
    "id": 302,
    "name": "Paris",
    "population": 2140526,
    "country": "France"
  },
  {
    "id": 303,
    "name": "Tokyo",
    "population": 13960000,
    "country": "Japan"
  },
  {
    "id": 304,
    "name": "Sydney",
    "population": 5230330,
    "country": "Australia"
  },
  {
    "id": 305,
    "name": "Cairo",
    "population": 9121515,
    "country": "Egyt"
  }
];

let  getCityPopulation = (city) =>  city.population;

console.log(getCityPopulation(cities[0]))

let isPopulationAboveThreshold = (city,threshold) => city.population >= threshold ? true: false;
console.log(isPopulationAboveThreshold(cities[1], 2000000))


let addCity = (cities, city) => {
  cities.push(city)
  return cities;
}
const newCity = {
  "id": 306,
  "population": 1200000,
  "country": "Canada"
};
console.log(addCity(cities, newCity))

let countCitiesInCountry = (cities, country) => {
	let count = 0;
	cities.forEach((city)=> city.country == country ? count += 1 : false);
  return count;
}

console.log(countCitiesInCountry(cities, "France"))


