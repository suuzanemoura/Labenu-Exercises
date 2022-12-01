
/*Exercício 1

Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3 */


//1. Utilizando ifs aninhados

let number = Number(prompt("Insira um número:"))

if(number%2 === 0 || number%3 === 0){

    if (number%2 === 0) {
        console.log(number, "é divisível por 2.")    
    }
    
    if (number%3 === 0) {
        console.log(number, "é divisível por 3.")
    } 
    
} else{
    console.log(number, "não é divisível por 2 ou 3.")
}


if (number%2 === 0 || number%3 === 0){
    console.log(number, "é divisível por 2 ou 3.")
} else {
    console.log(number, "não é divisível por 2 ou 3.")
}