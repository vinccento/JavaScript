
var controlador = {
  
    botonComenzar : document.querySelector('#comenzar'),
    
    navegar : function(destino) {
        ....
    },
    
    inicializar : function() {
        console.log('[0]' , this);
        this.botonComenzar.addEventListener('click', function(evt) {
            console.log('[1]' , this);
            this.navegar('pantallaPregunta');
        });
    }
    
    
};


controlador.inicializar();