let animais = [
    "Cachorro",
    "Gato",
    "Leão",
    "Tigre",
    "Cavalo"
];

let resultado = "";

for (let i = 0; i < animais.length; i++) {
    resultado += animais[i] + "<br>";
}

document.getElementById("resultado").innerHTML = resultado;

