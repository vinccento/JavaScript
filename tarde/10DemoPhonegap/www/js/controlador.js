var controlador =  {
  
    botonCargar : $('#cargar'),
    
    pantallaInicial : $('#landingPage'),
    pantallaPregunta : $('#preguntaPage'),
    cajaPregunta : $('#preguntaPage h1'),
    
    inicializarUI : function() {
        var self = this;
        console.log('Inicializando la UI.', this);
        this.botonCargar.on('click', function(evt) {
            evt.preventDefault();
            console.log('Pulsado cargar.' , this);
            self.mostrarPregunta();
        });
        
    },
    
    mostrarPregunta :  function() {
        var self = this;
        var promesa = modelo.obtenerPregunta('hoy');
        promesa.done(function(datos) {
            self.cajaPregunta.text(datos.texto);
            self.navegar(self.pantallaPregunta);
        });
    },
    
    navegar : function(pantallaDestino) {
        var id = pantallaDestino.attr('id');
        var url = id + '.html';
        var title = pantallaDestino.attr('data-titulo');
        var info = {
            pantallaId : id,
            hora : new Date()
        };
        
        History.pushState(info, title, url);        
    },
    
    obtenerIdPantallaActualPorInfo : function() {
        var estado = History.getState();
        var info = estado.data;
        var id = info.pantallaId;
        return id;
    },
    
    obtenerIdPantallaActualPorUrl : function(){
        var ruta = location.pathname + location.hash;
        var posInicial = ruta.lastIndexOf('/') + 1;
        var posFinal = ruta.lastIndexOf('.html');
        var id = null;
        if (posFinal != -1){
            id = ruta.substring(posInicial, posFinal);
        }
        return id;
    },

    procesarStateChange : function() {
        var id = this.obtenerIdPantallaActualPorInfo();
        if (id === undefined) {
            id = this.obtenerIdPantallaActualPorUrl();
        }
        var pantallaDestino = $('#' + id);
        if (pantallaDestino.length === 0) {
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
        
    },
    
    inicializarNavegacion : function() {  
        var self = this;
        History.Adapter.bind(window, 'statechange',
        function(){ 
            self.procesarStateChange();
        });
    },
    
    inicializar : function() {
        console.log('Inicializando sistema.', this);
        this.inicializarUI();
        this.inicializarNavegacion();
    }
    
    
};


$(document).on('ready', function() {
    controlador.inicializar();
});

