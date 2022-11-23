// Exercício 2

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const digiteNum1 = Number(prompt("Digite um número:"));
const digiteNum2 = Number(prompt("Digite um número:"));

function exercicioA (num1, num2){
    const soma = num1 + num2;
    console.log(`Essa é a soma: ${soma}`);
}

exercicioA(digiteNum1, digiteNum2)


//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function exercicioB (num1, num2) {
    const maiorIgual = num1 >= num2;
    return maiorIgual === true;
}

console.log(exercicioB(digiteNum1, digiteNum2))



// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function exercicioC (num1) {
    const par = num1 % 2 === 0
    return par === true;
}

console.log(exercicioC(digiteNum1))



// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

function salárioDescontoInss (valor1) {
    const descontoInss = valor1 - (valor1*0.1);
    console.log(`Esse é o seu salário com o desconto do Inss: R$${descontoInss}`);
}

let salario = Number(prompt("Qual é o seu salário?"))
salárioDescontoInss(salario)