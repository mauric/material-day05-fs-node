const fs = require('fs');

// Bring data
let movies = JSON.parse(
    fs.readFileSync('./data/movies.json', {
        encoding: "utf-8",
    })
)

function enCartelera(){
	const titulo  = 'En cartelera\n\n';
	const totalCartelera = 'Disponemos de ' + movies.length + ' peliculas para que disfrutes\n\n';
	const listadoPeliculas = 'Listado de peliculas\n\n';
	let listaTempPeliculas = '-----------------------------\n';
	for (let pelicula of movies){
		listaTempPeliculas += ' - ' + pelicula.title + '\n' + pelicula.overview + '\n-----------\n\n\n';
	}
	return titulo + totalCartelera + listaTempPeliculas; 
}

module.exports = enCartelera;