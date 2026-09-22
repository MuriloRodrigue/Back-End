let quantidade = Number(prompt("Quantas vezes o eco acontece?"));

for (let i = 1; i <= quantidade; i++) {

    let linha = "";

    for (let j = 1; j <= i; j++) {
        linha += "Olá ";
    }

    console.log(linha);
}