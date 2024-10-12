// Obtiene un elemento por id
document.getElementById('someid');

// Obtinee una lista con los elementos que tienen esa clase
document.getElementsByClassName('someclass');

// Obtiene una HTMLCollection con los todos los elementos 'li'
document.getElementsByTagName('LI');

// Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
document.querySelector('.someclass');

// Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
document.querySelectorAll('div.note, div.alert');

// const elementoPorId = document.getElementById('elemento-1')
// console.log('Este es mi elemento 1', elementoPorId);

// const elementoPorClase = document.getElementsByClassName('clase-1')
// console.log('Estos son mis elementos por clase', elementoPorClase);

// const elementosPorTagName = document.getElementsByTagName('DIV');
// console.log('Estos son mis elementos por tagname', elementosPorTagName);

// const elementoPrimero = document.querySelector('.clase-1');
// console.log('este es mi elemento primero', elementoPrimero);

// const elementosAll = document.querySelectorAll('div, p');
// console.log('todos los elementos', elementosAll);

const texto = 'MUNDO SOY UN TEXTO DENTRO DE UNA CONSTANTE'

const elementoPorId = document.getElementById('elemento-1')
// elementoPorId.textContent = 'HOLA MUNDO'
elementoPorId.innerHTML = `<p>HOLA ${texto}</p>`

const mensajeBoton = document.getElementById('boton')

// afuera de la funcion, se mantendrá siempre el hazme click
const textoOriginal = mensajeBoton.textContent

const apretarBoton = () => {
    // estamos comparando que el texto que tiene el boton
    // sea igual al texto original (hazme click)
    if (mensajeBoton.textContent === textoOriginal) {
        mensajeBoton.textContent = 'Ya me hizo click!'
    } else {
        mensajeBoton.textContent = textoOriginal
    }
}
mensajeBoton.addEventListener("click", apretarBoton)

//otra forma de crear un evento click
function cambiarTexto6() {
    const boton = document.getElementById("boton");
    boton.textContent = "Mensaje Nuevo!";
  }


