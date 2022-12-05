
let num = +prompt("Insira um número:")

const tabuada = (numero) => {
    console.log(`Tabuada de ${numero}`)

    for(let fator = 1; fator <= 10; fator++){
        console.log(`${numero}x${fator} = ${numero*fator} `)
    }

}

tabuada(num)