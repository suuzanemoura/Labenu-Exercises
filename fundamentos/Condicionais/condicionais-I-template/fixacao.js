  /*1. Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10;
Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada. Adicione um else que imprime que a pessoa foi reprovada se a condição não foi atendida.*/

const media = Number(prompt("Digite um número de entre 0 e 10:"))

if (media >= 5 && media<=10) {
    alert("Você foi aprovado(a)!")
} else if (media >= 3 && media < 5) {
    alert("Recuperação!")
} else if (media < 3){
    alert("Reprovado!")
} else {
    alert ("Dado inválido!")
}