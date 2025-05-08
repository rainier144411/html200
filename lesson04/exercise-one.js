let cities=['Portland','Seattle','New York','San Francisco','Austin'];
console.log(cities);

cities.push('Miami');
console.log(cities);

cities.splice(2,1);
console.log(cities);

let citiesJoin = cities.join(',');
console.log(citiesJoin);