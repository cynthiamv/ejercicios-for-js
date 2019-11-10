// 1. Mostrar en consola los números del 0 al 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// 2. Mostrar en consola los números del 100 al 0

for (let i = 100; i >= 0; i--) {
    console.log(i);
}


// 3. Mostrar en consola los números pares del 0 al 1000 

for (let i = 0; i <= 1000; i += 2) {
    console.log(i);
}


// 4. Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10)

for (let i = 0; i <= 10; i++) {
    console.log(`9 * ${i} = ${9 * i}`);
}


// 5. Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 (debe mostrar 500500)

let suma = 0;

for (let i = 1; i <= 1000; i++) {
    suma = suma + i;
}

console.log(suma);


// 6. Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000

let sumaImpar = 0;

for (let i = 0; i <= 1000; i += 2) {
    sumaImpar = sumaImpar + i;
}

console.log(sumaImpar);


// 7. Mostrar en consola el siguiente dibujo
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

let asterisco = "*";

for (let i = 0; i <= 13; i++) {
    console.log(asterisco);
    asterisco = asterisco + "*";
}


// 8. Mostrar en consola el siguiente dibujo
// *
// ***
// *****
// *******
// *********
// ***********
// *************

for (let i = 0; i <= 13; i += 2) {
    console.log(asterisco);
    asterisco = asterisco + "**";
}