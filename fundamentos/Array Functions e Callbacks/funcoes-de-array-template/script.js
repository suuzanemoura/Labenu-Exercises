//Exercício 1

function multiplicandoPor3 (array) {
  const novoArray = []
  for (let elemento of array){
    novoArray.push(elemento * 3)
  }
  return novoArray
}

const teste = [1, 2, 3, 4, 5, 6]
// multiplicandoPor3(teste)
// console.log("Original:",teste)
// console.log("Números multiplicados por 3:",multiplicandoPor3(teste))

//Exercício 2

const numerosPares = (array) => {
  const novoArray = []
  for (let numero of array){
    if (numero%2 === 0){
    novoArray.push(numero)
    }
  }
  return novoArray
}

const teste2 = [1, 2, 3, 4, 5, 6]
// numerosPares(teste2)
// console.log("Original:",teste2)
// console.log("Números pares:", numerosPares(teste2))

// Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.


function funcao(array, callback) {
  const novoArray = callback(array)
  console.log(novoArray)
}

funcao(teste, multiplicandoPor3)
funcao(teste2, numerosPares)

// Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().

const teste3 = [1, 2, 3, 4, 5, 6]

function multiply (array){
  const novoArray = array.map((numero) => numero*3)
  return novoArray
}

console.log (multiply(teste3))

/* SEGUNDO JEITO: MAP COM CALLBACK

const multiply3 = (array) => {
  array = array * 3
  return array
}

const novoArray = teste3.map((numero) => multiply3(numero))
console.log(novoArray)*/

//FILTER

function retornaPares(array) {
  const novoArray = array.filter((numero) => numero%2 === 0)
  return novoArray
}

console.log(retornaPares(teste3))