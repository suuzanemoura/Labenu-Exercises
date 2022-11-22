
// exercício 01

let idade
let idadeAmiga

idade = prompt("Qual é a sua idade?")

idadeAmiga = prompt("Qual é a idade da sua melhor amiga?")

let comparacao = idade > idadeAmiga
let diferenca = idade - idadeAmiga

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)

console.log("Diferença de idade:", diferenca)


// exercício 02

let a = true
let b = true
let c = true
let d = true

console.log(!b&&d)
console.log((b&&a)&&!d)
console.log(a||d)
console.log(c&&!d)