let nome
let idade

console.log(typeof nome, typeof idade);

// Ambas variáveis tiveram como impressão undefined, pois as variáveis não foram definidas.

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome);
console.log(typeof Number(idade));

// A variável nome imprimiu como string. Já a variável idade imprimiu corretamente como número porque teve casting (transformar string em number).

console.log("Olá " + nome + ", você tem " + 28 + " anos.");

/*const televisao

televisao = prompt("Sua TV é SMART?") + prompt("Você assiste Netflix na sua TV?") + prompt("Você assiste canais abertos?");
console.log (televisao); */

const perguntaA = "Sua TV é SMART?";
const respostaA = prompt(perguntaA);
console.log(perguntaA, "-", respostaA + ".");

const perguntaB = "Você assiste Netflix na sua TV?";
const respostaB = prompt(perguntaB);
console.log(perguntaB, "-", respostaB + ".");

const perguntaC = "Você assiste canais abertos?";
const respostaC = prompt(perguntaC);
console.log(perguntaC, "-", respostaC + ".");