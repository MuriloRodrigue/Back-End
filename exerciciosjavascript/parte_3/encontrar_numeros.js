let array1 = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100
];

let array2 = [
    15, 25, 30, 35, 45,
    55, 70, 75, 85, 95
];

let numerosIguais = [];

for (let i = 0; i < array1.length; i++) {

    for (let j = 0; j < array2.length; j++) {

        if (array1[i] == array2[j]) {

            numerosIguais.push(array1[i]);

        }
    }
}

console.log("Números que estão nos dois arrays:");

for (let i = 0; i < numerosIguais.length; i++) {

    console.log(numerosIguais[i]);

}