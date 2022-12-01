

//Exercício 1

let idadeDependente = 14

if (idadeDependente >= 13) {
    if (idadeDependente <= 17) {
        console.log("Pode ter o cartão de dependente.")
    } else {
        console.log("O limite de idade é de 17 anos")
    }
} else {
    console.log ("Para fazer o cartão, o dependente precisa ter entre 13 e 17 anos.")
}


//Usando operadores lógicos

if (idadeDependente >= 13 && idadeDependente <= 17) {
    console.log("Pode ter o cartão de dependente.")
} else {
    console.log("Para fazer o cartão, o dependente precisa ter entre 13 e 17 anos.")
}


//ternário

let chuva = false

chuva ? console.log ("Lembre-se de levar o guarda-chuva") : console.log("Não precisa levar guarda-chuva")

//usando o exemplo do cartão

idadeDependente >= 13 && idadeDependente <= 17 ? console.log("Pode ter o cartão") : console.log("Consulte outras opções")



//Switch-case

let escolhaUsuario = +(prompt (`Escolhauma das opções de cartões abaixo:\n 1 - Fácil\n 2 - Black\n 3 - Platinum\n 4 - Master Gold`))
let cartao

switch (escolhaUsuario) {
    case 1:
        cartao = "Fácil"
        break;
    
    case 2:
        cartao = "Black"
        break;

    case 3:
        cartao = "Platinum"
        break;
    
    case 4:
        cartao = "Master Gold"
        break;
    
    default:
        cartao = "Escolha uma das quatro opções disponíveis."
        break;
}

console.log("Cartão:", cartao)