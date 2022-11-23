//Exercício 3

// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function mais (num1, num2) {
    const soma = num1 + num2;
    return `Essa é a soma do número ${num1} com o número ${num2}: ${soma}`;
}

console.log(mais(50, 100))

function menos (num1, num2) {
    const subtracao = num1 - num2;
    return `Essa é a subtração do número ${num1} com o número ${num2}: ${subtracao}`;
}

console.log(menos(50, 100))



function vezes (num1, num2) {
    const multiplicacao = num1 * num2;
    return `Essa é a multiplicação do número ${num1} com o número ${num2}: ${multiplicacao}`;
}

console.log(vezes(50, 100))

function dividido (num1, num2) {
    const divisao = num1 / num2;
    return `Essa é a divisão do número ${num1} com o número ${num2}: ${divisao}`;
}

console.log(dividido(50, 100))


// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const numero1 = Number(prompt("Insira um número:"))
const numero2 = Number(prompt("Insira um número:"))

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
console.log("  ")
console.log(mais(numero1, numero2))
console.log(menos(numero1, numero2))
console.log(vezes(numero1, numero2))
console.log(dividido(numero1, numero2))


// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const soma = mais(numero1, numero2)
const subtracao = menos(numero1, numero2)
const multiplicacao = vezes(numero1, numero2)
const divisao = dividido(numero1, numero2)

console.log("  ")
console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

