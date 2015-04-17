var modelo = {
  
    URL_RECUPERAR_PREGUNTA : 'http://demo8983883.mockable.io/votaciones/{id}',
	
	URL_RECUPERAR_RESPUESTAS : 'http://demo2777847.mockable.io/respuestas/{id}/{opcion}',
	
    
    obtenerPregunta : function(id) {
        
        var url = this.URL_RECUPERAR_PREGUNTA.replace('{id}', id);
        var promesa = $.get(url);
        
        promesa.done(function(datos) {
            console.log('Datos recuperados: ', datos);
        });
        
        return promesa;
    },
	
	obtenerRespuesta: function(id, opcion){
		var url1 = this.URL_RECUPERAR_RESPUESTAS.replace('{id}', id);
		var url = url1.replace('{opcion}', opcion);
		
		var promesa = $.post(url);
        
        promesa.done(function(datos) {
            console.log('Respuesta Recuperada: ', datos);
        });
        
        return promesa;
	}
    
    
};