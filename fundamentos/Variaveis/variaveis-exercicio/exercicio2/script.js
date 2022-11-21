//O exercício pede que valor de A seja 25 e B seja 10. Mas escolhi fazer um prompt para testar com qualquer valor.

let copoA = prompt("Qual é o valor do A?");
let copoB = prompt("Qual é o valor do B?");
let copoC

//Coloquei para imprimir o valor inicial, para mostrar a troca posteriormente.
console.log("O valor de A é", copoA+".");
console.log("O valor de B é", copoB+".");

copoC = copoA;
copoA = copoB;
copoB = copoC;
copoC = undefined;

console.log("O novo valor de A é", copoA +".");
console.log("O novo valor de B é", copoB +".");