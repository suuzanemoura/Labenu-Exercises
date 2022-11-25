//Crie a const para a frase aqui

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

console.log(novaFrase)

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

let fraseMaiuscula = "mas não deixe o gato sair"
fraseMaiuscula = fraseMaiuscula.toUpperCase()

novaFrase = novaFrase.replace("mas não deixe o gato sair", fraseMaiuscula)

console.log(novaFrase)
