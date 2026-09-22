let nigeria = 195900000;
let china = 1393000000;

let anos = 0;

while (nigeria <= china) {
    nigeria = nigeria + (nigeria * 0.038);
    china = china + (china * 0.0037);

    anos++;

    console.log("Ano:", anos);
    console.log("Nigéria:", nigeria);
    console.log("China:", china);
}

console.log("Quantidade de anos necessários:", anos);