
var controlador = {
  
    botonComenzar : $('#comenzar'),
    landingPage : $('#landingPage'),
    preguntaPage : $('#preguntaPage'),
    cajaPregunta : $('#preguntaPage h1'),
    
    
    navegar : function(destino) {
        var info = {
            idPagina : destino.attr('id')
        };
        var titulo = destino.attr('data-titulo');
        var path = info.idPagina + '.html';
        
        History.pushState(info, titulo, path);
    },
    
    realizarTransicion : function(destino) {
        $('.activa').fadeOut(function() {
            $(this).removeClass('activa');
            destino.fadeIn(function() {
                $(this).addClass('activa');
            });
        });
    },
    
    mostrarPregunta : function() {
        var self = this;
        var promesa = servicioGestionPreguntas.recuperar('hoy');
        promesa.done(function(datos) {
            self.cajaPregunta.text(datos.texto);
            self.navegar(self.preguntaPage);
        });
        
    },
    
    inicializar : function() {
        var self = this;
        console.log('[0]' , this);
        this.botonComenzar.click(function(evt) {
            evt.preventDefault();
            self.mostrarPregunta();
        });
        
        History.Adapter.bind(window,'statechange',function() { 
            var state = History.getState(); 
            var info = state.data;
            var id = (info.idPagina == undefined) ? 
                     'landingPage' : info.idPagina;
            var pantalla = $('#' + id);
            self.realizarTransicion(pantalla);
        });        
    }
    
    
};
$(document).ready(function() {
    controlador.inicializar();
});
