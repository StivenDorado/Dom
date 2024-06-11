function insertName(){

    var nombre = document.getElementById ("textName").value; //value se usa para obtener un valor de un campo de entrada 
    var texto = document.createElement ("li");

    texto.textContent = nombre; //inserta la variable nombre de contenido de tipo texto en la variable text

    document.getElementById ("listName").appendChild(texto);
    document.getElementById ("textName").value = "";
    //si el valor puesto no tiene caracter se crea un elemento vacio

}
