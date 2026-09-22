
let impares = [];

for (let i = 0; i <= 200; i++) {

    if (i % 2 != 0) {
        impares.push(i);
    }

}

let resultado = "";

for (let i = 0; i < impares.length; i++) {
    resultado += impares[i] + " ";
}

document.getElementById("resultado").innerHTML = resultado;
