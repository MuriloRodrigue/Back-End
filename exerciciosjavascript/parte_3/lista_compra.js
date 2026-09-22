let compras = [
    ["Detergente", "Arroz"],
    ["Sabão em pó", "Feijão"],
    ["Desinfetante", "Macarrão"],
    ["Água sanitária", "Carne"],
    ["Esponja", "Leite"]
];

console.log("Produtos de limpeza | Alimentação");

for (let i = 0; i < compras.length; i++) {

    console.log(
        compras[i][0] + " | " + compras[i][1]
    );

}