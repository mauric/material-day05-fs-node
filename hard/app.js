const http = require('http');

// Bring pages
const homePage = require('./src/homePage');
const cartelera = require('./src/enCartelera');
const masVotadas = require('./src/masVotadas');
const sucursales = require('./src/sucursales')
const contactos = require('./src/contacto');
const preguntasFrecuentes = require('./src/preguntasFrecuentes');
const routing = require('./routers');

// Create  SERVER
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// Route System
	switch(req.url){
		case "/":
			res.end(homePage2());
			break;
		case "/en-cartelera":
			res.end(cartelera());
			break;
		case "/mas-votadas":
			res.end(masVotadas());
			break;
		case "/sucursales":
			res.end(sucursales());
			break;
		case "/contacto":
			res.end(contactos());
			break;
		case "/preguntas-frecuentes":
			res.end(preguntasFrecuentes());
			break;
		default: {
			res.end("Error!!!!!!!");
		}
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));