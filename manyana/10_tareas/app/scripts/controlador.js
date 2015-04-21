var controlador = {
  
    $listaTareas  : $('#listaTareas'),
    $texto        : $('input[type=text]'),
    $botonAnyadir : $('button[type=submit]'),
    
    
    mostrarTareas : function(tareas) {
        this.$listaTareas.empty();
        for (var i=0; i < tareas.length; i++) {
            var tareaActual = tareas[i];
            var $li = $('<li>');
            $li.addClass('media');
            
            var $left = $('<div>');
            $left.addClass('media-left');
            
            $('<img>')
            
             .addClass('media-object pull-left')
             .attr('src', tareaActual.imagen)
             .appendTo($left);
            
            $left.appendTo($li);
            
            var $right = $('<div>');
            $right.addClass('media-body');
            
            $('<h4>')
                .text(tareaActual.titulo)
                .appendTo($right);
            
            $right.append(tareaActual.texto);
            $right.appendTo($li);
            
            $li.appendTo(this.$listaTareas);
        }
        
    },
    
    recargarTareas : function() {
        var self = this;
        var usuario = 'alice';
        var promesa = modelo.traerTareas(usuario);
        promesa.done(function(tareas) {
            self.mostrarTareas(tareas);
        });
    },
    
    
    registrarNuevaTarea : function() {
        var self = this;
        var promesa = modelo.agregarTarea(
            'alice', '2015/05/25', 'Reunión Ignasi',
            this.$texto.val(), 'http://xxx.com');
        promesa.done(function(tareas) {
            self.mostrarTareas(tareas);
        });
    },
    
    inicializarIU : function() {
        var self = this;
        this.$botonAnyadir.click(function(evt) {
            evt.preventDefault();
            self.registrarNuevaTarea();
        });
    },
    
    inicializar : function() {
        this.recargarTareas();
        this.inicializarIU();
    },
    
};


$(document).ready(function() {
    controlador.inicializar();
});
  
  
  
  
  
  
  
  
  
  
  
  

