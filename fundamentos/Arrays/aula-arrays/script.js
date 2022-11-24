
console.log("[Arrays]")

// Vamos criar alguns arrays, e refletir a respeito.

// Crie um array com 3 itens do tipo String
const arrayDeStrings =["Bruno", "Tião","Dandara"]
console.log(arrayDeStrings)
console.table(arrayDeStrings)

//o número de itens dentro do Array
console.log(arrayDeStrings.length)

//acessar um item do array pelo índice
console.log(arrayDeStrings[3])
console.log(arrayDeStrings[2])


// Crie um array com 3 itens do tipo Number
const arrayDeNumeros = [100, 200, 300]
console.table(arrayDeNumeros)


// Crie um array com uma String, um número e um booleano;
const arrayMisto = ["Copa do mundo", 2022, true]
console.table(arrayMisto)

const copaDoMundo = "Brasil"
const vitorias = 5
const hexa = true

const arrayComVariaveis = [copaDoMundo,vitorias,hexa]
console.table(arrayComVariaveis)

//para saber se um elemento está incluso no array
console.log(arrayComVariaveis.includes("Brasil"))
console.log(arrayComVariaveis.includes(copaDoMundo))
console.log(arrayComVariaveis.includes("Hexa"))


// Crie um array com apenas um valor. Um número.
const valorUnico = ["1994"]
console.log(valorUnico)


console.log(valorUnico[0])
console.log(valorUnico.length)


// Crie um array sem nenhum valor dentro.
const arrayVazio = []
console.log(arrayVazio)
