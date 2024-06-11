let texto = document.getElementById("texto");
console.log(texto);

let parra = document.getElementsByClassName("parrafo");
console.log(parra);

let item = document.getElementsByTagName("id");
console.log(item);

let nombre = document.querySelector("#titulo");
console.log (nombre);

let items = document.querySelectorAll("li");
console.log(items);

// crear nodo h2
let texto2 = document.createElement("section");
console.log(texto2);

let header = document.querySelector("header");
console.log(header);

header.appendChild(texto2);


let texto3 = document.createTextNode("Es cualquier texto");
console.log(texto3)

texto2.appendChild(texto3);

//

let main = document.querySelector("main");
console.log(main);

console.log("Crear nodos")
let div = document.createElement("div");
console.log(div);

main.appendChild(div);

let h3 = document.createElement("h3");
console.log(h3);

div.appendChild(h3);

let text = document.createTextNode("TEXTO CUALQUIERA");

h3.appendChild(text);

let p = document.createElement("p");
console.log(p)

div.appendChild(p);

let text2 = document.createTextNode("TEXTO CUALQUIERA");
console.log(text2);

p.appendChild(text2)