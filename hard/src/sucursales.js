const fs = require('fs');


// Bring data
let theaters = JSON.parse(
    fs.readFileSync('./data/theaters.json', {
        encoding: "utf-8",
    })
)


function sucursales(){
	const titulo  = 'Sucursales\n\n';

	let listaTempSalas = '---------------\n';
	for (let salas of theaters){
		listaTempSalas += salas.name + '\n\n' + salas.address + '\n\n' + salas.description + '\n----------------------\n';
	}

	const totalSalas = 'Disponemos de ' + theaters.length + ' salas\n';
	return titulo + totalSalas + listaTempSalas; 
}


module.exports = sucursales;