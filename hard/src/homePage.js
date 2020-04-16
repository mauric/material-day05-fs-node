const fs = require('fs');


// Bring data

let movies = JSON.parse(
    fs.readFileSync('./data/movies.json', {
        encoding: "utf-8",
    })
)



// Create content

function homePage(){

	const titulo = '​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n';
	const totalPeliculas = 'Disponemos de ' + movies.length + ' peliculas para que disfrutes\n\n';

	const titulosDePeliculas = movies.map(movie => movie.title);
	titulosDePeliculas.sort();
	let listaTempPeliculas = '-----------------------------\n';
	for (let pelicula of titulosDePeliculas){
		listaTempPeliculas += ' - ' + pelicula + '\n';
	}


  	const listaPeliculas = listaTempPeliculas + '-----------------------------\n\n';
	const secciones = ['En Cartelera', 'Mas Votadas', 'Sucursales', 'Contacto', 'Preguntas Frecuentes']
	const piePagina = 'Recorda que podes visitar las secciones:\n\n i. En Cartelera\nii. Mas Votadas\niii. Sucursales\niv. Contacto\nv. Preguntas Frecuentes' 
	return titulo + totalPeliculas + listaPeliculas + piePagina;

}


// Export modules

module.exports = homePage;