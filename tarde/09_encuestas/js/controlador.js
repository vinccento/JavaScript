var controlador =  {
  
    botonCargar : $('#cargar'),
    
    pantallaInicial : $('#landingPage'),
    pantallaPregunta : $('#preguntaPage'),
    cajaPregunta : $('#preguntaPage h1'),
	
    
    inicializarUI : function() {
        var self = this;
        console.log('Inicializando la UI.', this);
        this.botonCargar.on('click', function() {
            console.log('Pulsado cargar.' , this);
            self.mostrarPregunta(); 
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
    
    navegar : function(pantallaDestino) {
        $('.activa').fadeOut(function() {
            pantallaDestino.fadeIn(function() {
                $('.activa').removeClass('activa');
                pantallaDestino.addClass('activa');
            });
        });
        
    },
    
    
    inicializar : function() {
        console.log('Inicializando sistema.', this);
        this.inicializarUI();
    }
    
    
};


$(document).on('ready', function() {
    controlador.inicializar();
});

