const fs = require('fs');

// Bring data
let movies = JSON.parse(
    fs.readFileSync('./data/movies.json', {
        encoding: "utf-8",
    })
)



function masVotadas(){
	const titulo  = 'Mas Votadas!!!\n\n';

	//mejorar la tecnica con contador
	let listaTempPeliculas = '-----------------------------\n';
	let cont = 0;
	for (let pelicula of movies){
		if( pelicula.vote_average > 7){
		listaTempPeliculas += ' - ' + pelicula.title + '\n' + pelicula.vote_average + '\n' + pelicula.overview + '\n-----------\n\n\n';
		cont++;
	}
	}
	const totalPeliculas = 'Total de peliculas de ' + cont + ' mas votadas\n\n';
	return titulo + totalPeliculas + listaTempPeliculas; 
}



module.exports = masVotadas;