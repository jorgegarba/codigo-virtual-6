console.log(1);

console.log(2);

setTimeout(() => {
	console.log(3);
}, 2000);

console.log(4);

console.log(5);



const getCoords = (ciudad, callback) => {
	let rpta = undefined;
	setTimeout(() => {
		rpta = [-16.5135, -70.4521];
		callback(rpta);
	}, 3000);
}

getCoords("Arequipa", (rpta) => {
	console.log("Resultado");
	console.log(rpta);
});

for (const n of ["Jaime", "Gabi", "Mía"]) {
	console.log(n);
}
