var servicioGestionPreguntas = {
    
    URL_GET_PREGUNTA : 'http://demo8983883.mockable.io/votaciones/{id}',
    
    recuperar : function(id) {
        var promesa;
        
        var url = this.URL_GET_PREGUNTA.replace('{id}', id);
        promesa = $.get(url);
                                 
        return promesa;
        
    }
    
};