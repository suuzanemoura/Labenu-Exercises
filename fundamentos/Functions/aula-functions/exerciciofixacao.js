


function exercicioFixacao (nome, anoNascimento, ano) {
    const verifica = (ano - anoNascimento)>= 18;
    return `${nome} é maior de idade? ${verifica}.`
}

const usuario = prompt("Qual é o seu nome?")
const nascimento = Number(prompt("Qual é o seu ano de nascimento?"))
const anoAtual = Number(prompt("Insira o ano atual:"))


const nome2 = prompt("Qual é o seu nome?")
const anoNascimento2 = prompt("Qual é o seu ano de nascimento?")
const ano2 = prompt("Insira o ano atual:")


console.log(exercicioFixacao(usuario,nascimento,anoAtual))
console.log(exercicioFixacao(nome2,anoNascimento2,ano2))