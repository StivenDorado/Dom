// Selección del párrafo
let parrafo = document.querySelector('#tag1');
console.log(parrafo);

// Añadir eventos de click al párrafo
parrafo.addEventListener('click', () => {
    console.log('Me hiciste click');
});

parrafo.addEventListener('click', () => {
    console.log('Me hiciste click 2');
});

// Selección del botón
let clickboton = document.querySelector("#btn");
console.log(clickboton);

// Añadir eventos al botón
clickboton.addEventListener('click', function alerta() {
    console.log('Hiciste click en el botón');
});

clickboton.addEventListener('dblclick', function alerta() {
    console.log('Hiciste doble click en el botón');
});

// Selección del input
let inputField = document.querySelector('#inputField');
console.log(inputField);

// Añadir evento al input
inputField.addEventListener('mouseenter', function alerta() {
    console.log('Entraste a la zona de input');
});

// Evento para detectar escritura en el input
inputField.addEventListener('input', function() {
    console.log('Escribiste en el input');
});
