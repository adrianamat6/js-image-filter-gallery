'use-strict'


nodoImagenFuego = document.querySelectorAll('.fuego'); 
nodoImagenTierra = document.querySelectorAll('.tierra'); 
nodoImagenAgua = document.querySelectorAll('.agua'); 

nodoBotonTodos = document.querySelector('#btn-todos');
nodoBotonTierra = document.querySelector('#btn-tierra');
nodoBotonAgua = document.querySelector('#btn-agua');
nodoBotonFuego = document.querySelector('#btn-fuego');



nodoBotonTodos.addEventListener( 'click' , function(){
    for (imagenes of nodoImagenFuego){
        imagenes.style.display = 'none';
    }

    for (imagenes of nodoImagenTierra){
        imagenes.style.display = 'none';
    }

    for (imagenes of nodoImagenAgua){
        imagenes.style.display = 'none';
    }

} );

nodoBotonTierra.addEventListener( 'click' , function(){
    for (imagenes of nodoImagenTierra){
        imagenes.style.display = 'none';
    }

} );


nodoBotonFuego.addEventListener( 'click' , function(){
    for (imagenes of nodoImagenFuego){
        imagenes.style.display = 'none';
    }

} );

nodoBotonAgua.addEventListener( 'click' , function(){
    for (imagenes of nodoImagenAgua){
        imagenes.style.display = 'none';
    }

} );