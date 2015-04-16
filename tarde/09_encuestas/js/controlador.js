var controlador =  {
  
    botonCargar : $('#cargar'),
    
    pantallaInicial : $('#landingPage'),
    pantallaPregunta : $('#preguntaPage'),
    
    
    inicializarUI : function() {
        var self = this;
        console.log('Inicializando la UI.', this);
        this.botonCargar.on('click', function() {
            console.log('Pulsado cargar.' , this);
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

