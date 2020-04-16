
fs = require('fs');
// Bring data
let faqs = JSON.parse(
    fs.readFileSync('./data/faqs.json', {
        encoding: "utf-8",
    })
)



function preguntasFrecuentes(){
	const titulo  = 'Preguntas Frecuentes\n\n';
	const totalPF = 'Generalemente nos realizan estas ' + faqs.length + ' preguntas frecuentes\n\n'
	let  listaPF = '------------------\n\n' 
	for (pf of faqs){
		listaPF += ' - ' + pf.faq_title + '\n\n -' + pf.faq_answer + '\n\n----------------------\n';
	}
	return titulo + totalPF + listaPF;
}



module.exports = preguntasFrecuentes;