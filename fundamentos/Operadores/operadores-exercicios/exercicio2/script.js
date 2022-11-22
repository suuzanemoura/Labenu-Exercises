
let primeiro = Number(prompt("Digite um número:"))
let segundo = Number(prompt("Digite um número:"))

console.log(`

${primeiro} \n
${segundo} \n

O primeiro número é maior que o segundo? ${primeiro>segundo} \n
O primeiro número é igual ao segundo? ${primeiro==segundo} \n
O primeiro número é divisível pelo segundo? ${primeiro%segundo==0} \n
O segundo número é divisível pelo primeiro? ${segundo%primeiro==0} \n

`)