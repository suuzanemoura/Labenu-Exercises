

let novoArray = [30,33,15,09,94]

let arrayCopiado = novoArray.slice()

arrayCopiado.pop()
arrayCopiado.push(6)

console.log("Esse é o ArrayCopiado antes do splice:")
console.table(arrayCopiado)

arrayCopiado.splice(2,1)

console.log("Esse é o Array original:")
console.table(novoArray)

console.log("Esse é o ArrayCopiado depois do splice:")
console.table(arrayCopiado)

