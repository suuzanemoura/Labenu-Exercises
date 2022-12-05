
/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
O resultado deve ser: 70*/


let numero = +prompt("Insira um número:")

let somaDosNumeros = 0

while (numero !== 0){
    somaDosNumeros = numero + somaDosNumeros
    numero = +prompt("Insira um número:")
}

console.log(somaDosNumeros)



//Exercício 2

const num = +prompt("Digite um número")


for (let i = 0; i <= num; i++){
    console.log(i)
}


/* Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O número do índice ${indice} é ${numero[indice]}” */


const array = [5, 3, 8, 5, 1, 6, 9]

for(let i = 0; i < array.length; i++){
    console.log(`O número do índice ${i} é ${array[i]}`)
}