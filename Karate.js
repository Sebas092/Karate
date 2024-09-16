//---------------------------------------CARRUSEL DE IMAGENES---------------------------------------//

// "Let": Provee una manera de asociar valores con variables dentro del alcance de un bloque sin afectar el valor de variables con nombre similar fuera del bloque.

let list = document.querySelector('.slider .list');             // "querySelector" permite seleccionar el primer elemento del documento que coincida con un selector CSS
let items = document.querySelectorAll('.slider .list .item');   // "querySelectorAll" seleccionar un grupo de elementos en el Modelo de objetos de documento (DOM) en función de un selector CSS
let puntos = document.querySelectorAll('.slider .puntos li');   // "querySelectorAll" seleccionar un grupo de elementos en el Modelo de objetos de documento (DOM) en función de un selector CSS
let anterior = document.getElementById('anterior');             // "getElementById" seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
let siguiente = document.getElementById('siguiente');           // "getElementById" seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.

let activo = 0;         // Este activo representara el numero de la imagen del carrusel de imagenes.
let lengthItems = items.length - 1;   // Una propiedad de cadenas, matrices y otros objetos que devuelve la cantidad de caracteres o elementos en ese objeto.



//BOTONES "SIGUIENTE Y ANTERIOR"

// Creamos la funcion de "click" del boton siguiente.
        siguiente.onclick = function()          
                {
                if(activo + 1 > lengthItems)    // Creamos condicion en caso de que el en N° activo sea mayor al N° de imagenes del carrusel.
                {
                activo = 0;   // Si el N° de activo es mayor al N° de imagenes este regresa a la primera imagen.
                }
                else{
                activo = activo + 1;   // Si no lo es, este cambia a la siguiente imagen.
                }
                reloadSlider();    // Una ves cumplida una de las condiciones este continua trabajando con la funcion "reloadSlider"
                }

// Creamos la funcion de "click" del boton anterior.
        anterior.onclick = function()
                {
                if(activo - 1 > lengthItems)    // Creamos condicion en caso de que el en N° activo sea mayor al N° de imagenes del carrusel.
                {
                activo = 0;       // Si el N° de activo es mayor al N° de imagenes este regresa a la primera imagen.
                }
                else{
                activo = activo - 1;    // Si no lo es, este cambia a la imagen anterior.
                }
                reloadSlider();     // Una ves cumplida una de las condiciones este continua trabajando con la funcion "reloadSlider"
                }

        let refreshSlider = setInterval(() => {siguiente.click()}, 5000);         // Establecer un retardo en funciones que son ejecutadas una y otra vez.



// CARRUSEL DE IMAGENES.

// Creamos la funcion para que las imagenes del carrusel cambien en interbalos de tiempo y o con los botones.
        function reloadSlider()                  
                {
                let checkLeft = items[activo].offsetLeft;      // Devuelve el número de píxeles a la izquierda del elemento actual 
                list.style.left = -checkLeft + 'px';           // Acemos que la imagenes se deslicen a la isquiera sumandole los px de la imagen.

                let lastActivoDot = document.querySelector('.slider .puntos li.activo');  // "querySelector" permite seleccionar el primer elemento del documento que coincida con un selector CSS
                lastActivoDot.classList.remove('activo');    // Eliminar una o varias clases de la interfaz.
                puntos[activo].classList.add('activo');      // Agregar, eliminar y alternar una sola clase (add = agregar).
                clearInterval(refreshSlider);                // Este método se utiliza para detener la ejecución del intervalo.
                refreshSlider = setInterval(() => {siguiente.click()}, 5000)     // Establecer un retardo en funciones que son ejecutadas una y otra vez.
                }



// PUNTOS DE IDENTIFICACION DE IMAGENES.

// Aqui construimos una funcion para que al hacer clic en los puntos podamos elegir la imagen que queremos ver.

        puntos.forEach((li, key) =>      // Función que se ejecutará en cada uno de los elementos del array.
        {
                li.addEventListener('click', function()     //  Es la forma de registrar un listener de eventos (click y funcion()).
                {
                activo = key;           // El valor del activo se vuelve el valor seleccionado.
                reloadSlider();         // Inicia la funcion "realoadSlider()"
                })
        })