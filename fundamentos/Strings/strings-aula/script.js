
const nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual é a sua cor favorita?")


console.log("A cor favorita de", nome, "é", cor+".")


const nome2 = prompt("Qual é o seu nome?")
const cor2 = prompt("Qual é a sua cor favorita?")

console.log(`A cor favorita de ${nome2} é ${cor2}`)

/*Agora, vamos alterar a forma com que o texto aparece.
Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):*/

const citacao = prompt("Envie uma citação:")
console.log(`\"${citacao}\"`)

console.log(`Nome: ${nome}\nCor favorita: ${cor}`)

/*Vamos alterar a forma de nossa exibição de strings agora.
Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
Exiba no console quantos caracteres tem o nome da pessoa.
Cheque se o nome da pessoa possui a letra A*/

console.log(`O meu nome é ${nome.toUpperCase()} e meu nome tem ${nome.length} caracteres.`)
console.log("O nome", nome, "tem a letra A?", nome.includes("a"))


