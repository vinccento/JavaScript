var modelo = {
	
	URL_RECUPERAR_PREGUNTA : "http://demo4380334.mockable.io/preguntas/{id}",
	
	obtenerPregunta : function(id){
		var url = this.URL_RECUPERAR_PREGUNTA.replace('{id}', id);
		var promesa = $.get(url);
		
		promesa.done(function (datos){
			console.log('Datos recuperados: ', datos);
		});
		
		return promesa;
	}
};//Fin var Modelo