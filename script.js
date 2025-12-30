'use-strict'


const nodoImagenFuego = document.querySelectorAll('.fuego'); 
const nodoImagenTierra = document.querySelectorAll('.tierra'); 
const nodoImagenAgua = document.querySelectorAll('.agua'); 
 
const nodoBotonTodos = document.querySelector('#btn-todos');
const nodoBotonTierra = document.querySelector('#btn-tierra');
const nodoBotonAgua = document.querySelector('#btn-agua');
const nodoBotonFuego = document.querySelector('#btn-fuego');

const nodoContenedorPrincipal = document.querySelector('#botones'); 

nodoBotonTierra.addEventListener( 'click' , function(){
    for (let imagenes of nodoImagenFuego){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenTierra){
        imagenes.style.display = 'block';
    }

    for (let imagenes of nodoImagenAgua){
        imagenes.style.display = 'none';
    }

    
} );


nodoBotonFuego.addEventListener( 'click' , function(){
    for (let imagenes of nodoImagenFuego){
        imagenes.style.display = 'block';
    }

    for (let imagenes of nodoImagenTierra){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenAgua){
        imagenes.style.display = 'none';
    }


} );

nodoBotonAgua.addEventListener( 'click' , function(){
    for (let imagenes of nodoImagenFuego){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenTierra){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenAgua){
        imagenes.style.display = 'block';
    }


} );

let contador = 1; 
nodoBotonTodos.addEventListener( 'click' , function(){
    if (contador %2 != 0){
        mostrar_todos()
    }else{
        ocultar_todos()
    };
    contador += 1
} );



function mostrar_todos(){
    for (let imagenes of nodoImagenFuego){
        imagenes.style.display = 'block';
    }

    for (let imagenes of nodoImagenTierra){
        imagenes.style.display = 'block';
    }

    for (let imagenes of nodoImagenAgua){
        imagenes.style.display = 'block';
    }
}

function ocultar_todos(){
    for (let imagenes of nodoImagenFuego){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenTierra){
        imagenes.style.display = 'none';
    }

    for (let imagenes of nodoImagenAgua){
        imagenes.style.display = 'none';
    }
}




// PARTE 2 -  Pop up maquetado 
const nodoImagenClick = document.querySelectorAll('.imagen'); 

for(let nodoImagen of nodoImagenClick){
    nodoImagen.addEventListener( 'click', function(){
    nodoImagen.classList.add( 'overlay' )
    }) 
}

