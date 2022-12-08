const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


//1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.


function upperCase(objeto){

    let upperCased = {};

    for (let propriedade in objeto) {
    upperCased[propriedade] = objeto[propriedade].toUpperCase();
    }

    return upperCased
}  

console.log(upperCase(objeto))


// 2. A segunda deve retornar os valores do objeto como texto corrido.

function myString(objeto){

    let myString = " "

    for (const propriedade in objeto) {
    // myString = objeto[propriedade]
    // }

    // return myString

    myString = myString + `${objeto[propriedade]}, `
    }

    return myString.slice(0, myString.length -2)  
}  

console.log(myString(objeto))
// console.log(JSON.stringify(objeto))


//3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const imprimir = (objeto, callback) => {
    const novoObjeto = callback(objeto)
    return novoObjeto
}

console.log(imprimir(objeto, upperCase))
console.log(imprimir(objeto, myString))