
// Exercício 1

let coxinha = prompt("Você deseja comer coxinhas? Responda S para sim ou N para não.").toUpperCase()

let conta = 0

while (coxinha !== "N") {
    conta = conta + 2.50
    coxinha = prompt("Você deseja comer mais coxinhas? Responda S para sim ou N para não.").toUpperCase()
}

console.log(`Sua conta é no valor total de R$${conta.toFixed(2)}`)

