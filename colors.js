let negro = document.querySelector("#color1");
negro.addEventListener('click',
    function cambio(){
        negro.style.backgroundColor = 'black';
        console.log('cambio color1');

    }
)



let rojo = document.querySelector("#color2");
rojo.addEventListener('click',
    function cambio(){
        rojo.style.backgroundColor = 'red';
        console.log('cambio color2');

    }
)

let amarillo = document.querySelector("#color3");
amarillo.addEventListener('click',
    function cambio(){
        amarillo.style.backgroundColor = 'yellow';
        console.log('cambio color3');

    }
)

let verde = document.querySelector("#color4");
verde.addEventListener('click',
    function cambio(){
        verde.style.backgroundColor = 'green';
        console.log('cambio color4');

    }
)

let blanco = document.querySelector("#color5");
blanco.addEventListener('click',
    function cambio(){
        blanco.style.backgroundColor = 'white';
        console.log('cambio color5');

    }
)


//cuadro

let cuadro = document.querySelector("#cuadro");
console.log(cuadro);



cuadro.style.border = '3px solid black';
cuadro.style.width = '200px';
cuadro.style.height = '30vh';
cuadro.style.backgroundColor = 'black';
cuadro.style.color = 'white';

//cambios

negro.addEventListener('click',
    function cambio(){
        cuadro.style.backgroundColor = 'black';
        console.log('cambio color1');

    }
)




rojo.addEventListener('click',
    function cambio(){
        cuadro.style.backgroundColor = 'red';
        console.log('cambio color2');

    }
)


amarillo.addEventListener('click',
    function cambio(){
        cuadro.style.backgroundColor = 'yellow';
        console.log('cambio color3');

    }
)


verde.addEventListener('click',
    function cambio(){
        cuadro.style.backgroundColor = 'green';
        console.log('cambio color4');

    }
)


blanco.addEventListener('click',
    function cambio(){
        cuadro.style.backgroundColor = 'white';
        console.log('cambio color5');

    }
)


