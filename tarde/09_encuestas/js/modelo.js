var modelo = {
  
    URL_RECUPERAR_PREGUNTA : 'http://demo8983883.mockable.io/votaciones/{id}',
    
    obtenerPregunta : function(id) {
        
        var url = this.URL_RECUPERAR_PREGUNTA.replace('{id}', id);
        var promesa = $.get(url);
        
        promesa.done(function(datos) {
            console.log('Datos recuperados: ', datos);
        });
        
        return promesa;
    }
    
    
};