
function router(req, res){
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

}



module.exports = router;