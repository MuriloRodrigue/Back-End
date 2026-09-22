let carros = [
    ["Toyota", "Corolla"],
    ["Toyota", "Yaris"],
    ["Toyota", "Hilux"],

    ["Volkswagen", "Golf"],
    ["Volkswagen", "Polo"],
    ["Volkswagen", "T-Cross"],

    ["Chevrolet", "Onix"],
    ["Chevrolet", "Tracker"],
    ["Chevrolet", "S10"],

    ["Ford", "Mustang"],
    ["Ford", "Ranger"],
    ["Ford", "Territory"]
];

let tabela = document.createElement("table");

tabela.border = "1";

for (let i = 0; i < carros.length; i++) {

    let linha = document.createElement("tr");

    let colunaMarca = document.createElement("td");
    colunaMarca.textContent = carros[i][0];

    let colunaModelo = document.createElement("td");
    colunaModelo.textContent = carros[i][1];

    linha.appendChild(colunaMarca);
    linha.appendChild(colunaModelo);

    tabela.appendChild(linha);

    // Cria uma linha com HR depois de cada 3 carros
    if ((i + 1) % 3 == 0 && i != carros.length - 1) {

        let linhaSeparadora = document.createElement("tr");

        let colunaSeparadora = document.createElement("td");

        colunaSeparadora.colSpan = 2;

        let hr = document.createElement("hr");

        colunaSeparadora.appendChild(hr);
        linhaSeparadora.appendChild(colunaSeparadora);

        tabela.appendChild(linhaSeparadora);
    }
}

document.body.appendChild(tabela);