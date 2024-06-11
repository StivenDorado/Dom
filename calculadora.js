function suma(){
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1+num2;
}

function resta(){
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1-num2;
}

function multipicar(){
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1*num2;
}
function dividir(){
    let num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1/num2;
}

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';