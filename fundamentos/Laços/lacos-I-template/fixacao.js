
/* 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
“A”: Administrador;
“B”: Usuário comum;
“C”: Usuário assinante

Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa. */


let usuario = prompt("Digite seu tipo de usuário:").toUpperCase() 

while(usuario !== "A"){
    alert("Acesso negado")
    usuario = prompt("Digite seu tipo de usuário:").toUpperCase()
}

alert("Boas-vindas, admin!")


function tipoUsuario (usuario){
    while(usuario !== "A"){
    alert("Acesso negado")
   usuario = prompt("Digite seu tipo de usuário:").toUpperCase()}
   alert("Boas-vindas, admin!")
}

console.log(tipoUsuario(usuario))


//Exercício 2


function tabuada (num){

for (let i = 1; i <= 10; i++){
    console.log(`${num}x${i} = ${num*i}`)}
}

tabuada(2)


// Exercício 3

let array = ["Oi", "tudo", "bem?"]

for(let i = 0; i < array.length; i++){
    console.log(array[i].toUpperCase())
}




