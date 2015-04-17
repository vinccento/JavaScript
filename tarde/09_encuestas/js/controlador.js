var controlador =  {
  
    botonCargar : $('#cargar'),
    
    pantallaInicial : $('#landingPage'),
    pantallaPregunta : $('#preguntaPage'),
	pantallaResultados : $('#resultadosPage'),
    cajaPregunta : $('#preguntaPage h1'),
	
    
	inicializar : function() {
        console.log('Inicializando sistema.', this);
        this.inicializarUI();
		this.inicializarNavegacion();
    },
	
    inicializarUI : function() {
        var self = this;
        console.log('Inicializando la UI.', this);
        this.botonCargar.on('click', function() {
            console.log('Pulsado cargar.' , this);
            self.mostrarPregunta(); 
        });        
    },
	
	inicializarNavegacion : function(){
		var self = this;
		History.Adapter.bind(window,'statechange',function(){
			self.procesarStateChange();
    	});
	},
	
	mostrarPregunta : function(){
		var self = this;
		var promesa = modelo.obtenerPregunta('hoy');
		promesa.done(function(datos){
			self.cajaPregunta.text(datos.texto);
			self.navegar(self.pantallaPregunta);
		});
	},
    
	navegar : function(pantallaDestino){
		var id = pantallaDestino.attr('id');
		var url = id + '.html';
		var title = pantallaDestino.attr('data-titulo');
		var info = {
				pantallaId : id,
				hora : new Date()
		};
		
		//manipular el historial del navegador
		//para poder navegar por nuestra aplicacion
		//de una single page application.
		History.pushState(info, title, url);
	},    
    
	procesarStateChange : function(){		
		var ruta = location.pathname + location.hash;
		var posFinal = ruta.lastIndexOf('.html');
		var posInicial = ruta.indexOf('#');
		if(posInicial === -1){
			posInicial = ruta.lastIndexOf('/') + 1;
		}
		var id = ruta.substring(posInicial, posFinal);
		var pantallaDestino = $('#' + id);
		if (pantallaDestino.length === 0){
			pantallaDestino = this.pantallaInicial;
		}
		this.realizarTransicion(pantallaDestino);
		
	},
	
	realizarTransicion : function(pantallaDestino) {
        $('.activa').fadeOut(function() {
            pantallaDestino.fadeIn(function() {
                $('.activa').removeClass('activa');
                pantallaDestino.addClass('activa');
            });
        });
        
    }  
};//Fin var Controlador


$(document).on('ready', function() {
    controlador.inicializar();
});

