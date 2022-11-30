
//Exercício 1

const booleano1 = false
const booleano2 = true

if (booleano1) {

    alert("Booleano 1 é true!")
} else {
    alert ("Booleano 1 é false!")
}


//Exercício 2

const booleano3 = true

if (booleano1 === booleano2) {
    alert("Booleano 1 e 2 são iguais!")
} else if (booleano2 === booleano3) {
    alert("Booleano 2 e 3 são iguais!")
} else if (booleano1 === booleano3) {
    alert("Booleano 1 e 3 são iguais!")
} else {
    alert("Os valores são diferentes")
}


//Exercício 3

const idade = 28

if (idade>=16 && idade<= 18) {
    alert("Voto opcional!")
} else if (idade >= 60 ){
    alert("Voto opcional idoso!")
} else if (idade >= 18){
    alert("Voto obrigatório!")
} else if (idade < 16){
    alert("Não pode votar!")
} else {
    alert("Voto inválido!")
}