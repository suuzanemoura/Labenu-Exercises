

function apredendoFuncao (nome) {
    console.log(`Olá, seja bem-vinda ${nome}!`)
}

const apredendoArrowFunction = (nome) => {
    console.log(`Olá, seja bem-vindo ${nome}!`)
}


const apredendoArrowFunctionAbreviada = (nome) => console.log(`Olá, seja bem-vinda ${nome}!`)


const apredendoFuncaoReturn = (nome) => {
    return `Olá, seja bem-vindo ${nome}!`
}


apredendoFuncao ("Suzane")
apredendoArrowFunction ("Bryan")
apredendoArrowFunctionAbreviada ("Fulana")
console.log(apredendoFuncaoReturn("Ciclano"))

