document.querySelector('.menu-boton').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
}
);

document.querySelector('.nav-click').addEventListener('click', ()=>{
    document.querySelector('.input').classList.toggle('show');
}
);

/*esta línea de código en JavaScript agrega un evento 'click' al elemento HTML con la clase 'menu-boton' y define la función de respuesta a ese evento como una función de flecha. La función de respuesta, a su vez, busca un elemento HTML con la clase 'nav-menu' y alterna la presencia de la clase 'show' en ese elemento.

Desglosando cada acción:

    document.querySelector('.menu-boton'): selecciona el primer elemento del documento HTML que tenga la clase 'menu-boton' utilizando el método querySelector() del objeto document. Este método devuelve una referencia al objeto HTML encontrado, que puede ser un elemento de cualquier tipo (por ejemplo, un botón, una imagen, etc.).
    .addEventListener('click',()=> {...});: agrega un evento de 'click' al elemento seleccionado en el paso anterior. Cuando este evento se dispare, se ejecutará la función de respuesta especificada. En este caso, se utiliza una función de flecha ()=> {...} como respuesta. Esta es una forma abreviada de escribir una función anónima en JavaScript que no requiere la palabra clave function.
    document.querySelector('.nav-menu').classList: busca un elemento HTML que tenga la clase 'nav-menu' utilizando el método querySelector() del objeto document. Luego, se accede a la propiedad classList del objeto encontrado. La propiedad classList es un objeto que representa la lista de clases asociadas con un elemento HTML.
    .toggle('show'): alterna la presencia de la clase 'show' en el objeto de la lista de clases del elemento HTML encontrado. Si la clase 'show' está presente, la elimina; si no está presente, la agrega.

En resumen, esta línea de código agrega un evento de 'click' a un botón con la clase 'menu-boton' y, cuando se hace clic en el botón, muestra o oculta un elemento HTML con la clase 'nav-menu' al agregar o quitar la clase 'show'.

lo ootra linea hace exactemente lo mismo pero esta vez lo hace con la clase que tenga input, en este caso en especifico es para la caja de busqueda que al momento de apretar la lipa que tiene clase nav.click esta le agregue o quite el show a la clase input para asi mostrar la barra de busqueda o en este caso un input*/
