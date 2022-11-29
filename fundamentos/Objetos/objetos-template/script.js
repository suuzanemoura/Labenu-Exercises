

//Exercício 1

const estudante = {
    nome: "Vinicius",
    sobrenome: "Oliveira",
    matricula: 32481,
    notas: [10, 9, 8]
}

estudante.modulo = "Módulo 1"

console.log("Estudante:", estudante)
console.log("Nome:", estudante.nome)
console.log("Notas:", estudante.notas)
console.log("Notas primeiro bimestre:", estudante.notas[0])


//Exercício 2


const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notas: [...estudante.notas, 9],
    modulo: "Módulo 2"
}

novoEstudante.notas.push(7)
console.log(novoEstudante)


//Exercício 3

const estudantesLabenu = [estudante, novoEstudante]
console.log(estudantesLabenu)