package carro_eletrico;

public class Main {

    public static void main(String[] args) {

        CarroEletrico carro = new CarroEletrico("Tesla Model 3");

        System.out.println("Modelo: " + carro.getModelo());

        // Acelera várias vezes até atingir o limite
        for (int i = 0; i < 10; i++) {
            carro.acelerar();
        }

        // Tenta carregar em movimento
        carro.carregarBateria();

        // Freia até parar
        while (carro.getVelocidadeAtual() > 0) {
            carro.frear();
        }

        // Carrega a bateria
        carro.carregarBateria();

        // Exibe estado final
        System.out.println("\nEstado final do carro:");
        System.out.println("Modelo: " + carro.getModelo());
        System.out.println("Velocidade: " + carro.getVelocidadeAtual() + " km/h");
        System.out.println("Bateria: " + carro.getCargaBateria() + "%");
    }
}