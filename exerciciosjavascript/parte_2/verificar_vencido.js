while (true) {
    let nome = prompt("Digite o nome do produto ou 'sair' para encerrar:");

    if (nome.toLowerCase() === "sair") {
        break;
    }

    let dataVencimento = prompt("Digite a data de vencimento (AAAA-MM-DD):");

    let vencimento = new Date(dataVencimento);
    let hoje = new Date();

    if (vencimento < hoje) {
        console.log(nome + " está vencido.");
    } else {
        console.log(nome + " não está vencido.");
    }
}