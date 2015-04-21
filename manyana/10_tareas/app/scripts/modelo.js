var modelo =  {
  
    URL_TAREAS : 'http://demo8983883.mockable.io' + '/usuarios/{usuario}/tareas',
    
    traerTareas : function(usuario) {
        var url = this.URL_TAREAS
                      .replace('{usuario}', usuario);
        var promesa = $.get(url);
        return promesa;
    },
    
    
    agregarTarea : function (usuario, fecha, titulo, texto, imagen) {
        var url = this.URL_TAREAS
                      .replace('{usuario}', usuario);
        var data = {
            'fecha' : fecha, 'titulo' : titulo,
            'texto' : texto, 'imagen' : imagen
        };
        var promesa = $.post(url, data);
        return promesa;
    }
    
};