// Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function olaMundo (nome){
    console.log(`Olá mundo, me chamo ${nome}!`)
}

olaMundo ("Suzane")


const oiMundo = (nome) => console.log(`Oi mundo, me chamo ${nome}!`)

oiMundo ("Fulano")


// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.



function tabuada (num){
        const um = num*1;
        const dois = num*2;
        const tres = num*3;
        const quatro = num*4;
        const cinco = num*5;
        const seis = num*6;
        const sete = num*7;
        const oito = num*8;
        const nove = num*9;
        const dez = num*10;

        return `Essa é a tabuada de ${num}:
        ${num} x 1: ${um}
        ${num} x 2: ${dois}
        ${num} x 3: ${tres}
        ${num} x 4: ${quatro}
        ${num} x 5: ${cinco}
        ${num} x 6: ${seis}
        ${num} x 7: ${sete}
        ${num} x 8: ${oito}
        ${num} x 9: ${nove}
        ${num} x 10: ${dez}`
    }

const numeroTabuada = Number(prompt("Insira um número:"))
console.log(tabuada(numeroTabuada))


const segundaTabuada = (num) => {
        const um = num*1;
        const dois = num*2;
        const tres = num*3;
        const quatro = num*4;
        const cinco = num*5;
        const seis = num*6;
        const sete = num*7;
        const oito = num*8;
        const nove = num*9;
        const dez = num*10;

        return `Essa é a tabuada de ${num}:
        ${num} x 1: ${um}
        ${num} x 2: ${dois}
        ${num} x 3: ${tres}
        ${num} x 4: ${quatro}
        ${num} x 5: ${cinco}
        ${num} x 6: ${seis}
        ${num} x 7: ${sete}
        ${num} x 8: ${oito}
        ${num} x 9: ${nove}
        ${num} x 10: ${dez}`
    }

const numeroTabuada2 = Number(prompt("Insira um número:"))

console.log(segundaTabuada(numeroTabuada2))
