
/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!

2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.*/

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o email do usuário?")

const fraseBoasVindas = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Seu nome de usuário tem ${nomeDoUsuario.length} caracteres.`

console.log(fraseBoasVindas)


/*3. A seguir, faça o que se pede:
Substitua todas as letras R na frase criada, por letras X
Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.*/

const novafrase = fraseBoasVindas.replaceAll('r', 'x')
console.log(novafrase)
console.log(`O email possui @? ${emailDoUsuario.includes("@")}`)