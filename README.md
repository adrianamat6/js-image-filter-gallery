# js-image-filter-gallery

En este proyecto se desarrolla una galería de imágenes interactiva que permite filtrar elementos en tiempo real según su categoría.

## 🚀 Funcionalidades
- **Filtrado dinámico:** Botones funcionales para mostrar categorías específicas (Fuego, Agua, Tierra) o "Todos".
- **Gestión de clases:** Uso de lógica en JavaScript para añadir/quitar clases de visibilidad.
- **Integración Modal (Extra):** Las imágenes filtradas pueden abrirse en un pop-up detallado.

## 🛠️ Tecnologías
- HTML5 Semántico
- CSS3 (Layout de rejilla / Flexbox)
- JavaScript ES6+ (Uso intensivo de `querySelectorAll`, `forEach` y `classList`)

## 💡 Conceptos aprendidos
- Cómo iterar sobre listas de nodos (NodeLists).
- Estrategias de filtrado: Ocultar vs Mostrar elementos mediante clases CSS.
- Comunicación entre componentes (Galería -> Modal).

## -----------------------------------------------------------
## Comentarios Luis
# Grid de imágenes 

En un grid de imágenes que tenemos ya en el HTML queremos ver/ocultar unas imágenes en función a si tienen una determinada clase


Hacer este ejercicio después de haber hecho el del modal

## 1. Maquetar

Os paso el contenedor de las imágenes, pero el resto debe ser maquetado 

El grid de imágenes es el siguiente: Se van a usar las clases fuego, tierra, agua para "agrupar" a los elementos

```html

<div id="imagenes">
    <div class="imagen fuego">
        <img src="pexels-photo-110867.jpeg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
    <div class="imagen tierra">
        <img src="pexels-photo-102728.jpeg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
    <div class="imagen agua">
        <img src="splashing-splash-aqua-water-67843.jpeg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
    <div class="imagen agua">
        <img src="bora-bora-french-polynesia-sunset-ocean.jpg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
    <div class="imagen agua">
        <img src="drops-of-water-water-nature-liquid-40784.jpeg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
    <div class="imagen fuego">
        <img src="night-fire-easter-celebration.jpg">
        <!-- <div class="overlay">
            <div class="view"> Ver </div>
        </div> -->
    </div>
</div>
```

## 2 Pensar qué va a hacer que se vean las imágenes
Pensar la estrategia para que unas imágenes se vean y otras no.


## 3.Pseudo código

Escribir lo que queremos que haga cada uno de los botones.



## 4. Incluir un pop up maquetado 

Este pop up debe abrirse cuando se pulse cada uno de los elementos con la clase "imagen" y cerrarse cuando se pulse al botón CERRAR

Para simplificar, el pop up debe mostrar la imagen número 1.
