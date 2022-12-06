

let num = +(prompt("Insira um número:"))
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Tabuada de ${num}`)
console.log(`\n`)


for (let fator in tabuada){
    console.table(`${num}x${tabuada[fator]} = ${num*tabuada[fator]}`)

}



// let num = +(prompt("Insira um número:"))

// console.log(`Tabuada de ${num}`)
// console.log(`\n`)

// for (let fator = 1; fator <= 10; fator++){
//     let tabuada = [num * fator];
//     for (let produto in tabuada){
//     console.log(`${num} x ${fator} = ${tabuada[produto]}`)
//     }
// }
