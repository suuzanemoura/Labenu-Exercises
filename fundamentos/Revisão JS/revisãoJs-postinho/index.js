
/*// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
    return `${a} é maior que ${b}? ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null = true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    let nomeDoUsario = prompt("Digite seu nome:");

    let anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"));
    let idade = 2022 - anoDeNascimento;

    if (idade < 18){
        alert("Para se cadastrar precisa ter 18 anos")
        return
    }
    
    let nacionalidade = prompt("Insira sua nacionalidade:").toLowerCase();

    if (nacionalidade !== "brasileiro" && nacionalidade !== "brasileira"){
        alert("Para se cadastrar precisa ser brasileiro")
        return
    }

    let senhaDoUsuario = prompt("Insira uma senha (min. 6 caracteres):");

    
    if(senhaDoUsuario.length < 6){
        alert("Sua senha deve ter pelo menos 6 caracteres")
        return
    }

    if (idade >= 18 && senhaDoUsuario.length >= 6 ){
        if (nacionalidade === "brasileiro" || nacionalidade === "brasileira"){
            usuario.push({nome: nomeDoUsario, ano: anoDeNascimento, nacionalidade: nacionalidade, senha: senhaDoUsuario})
            alert("Usuário cadastrado com sucesso!")
        }}
    
        console.log("Usuário:", usuario)
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senha = prompt("Insira sua senha:")

    if(senha === login){
        console.log("Usuário logado")
    } else {
        console.log("Senha Inválida")
    }

}

console.log(login());


// Exercício 5 ------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const name = prompt("Insira seu nome:")
    const vacina = prompt("Insira a vacina de primeira dose:")
    let tempo = 0
    let data = new Date()
    

    if(vacina.toLowerCase() === "coronavac"){
        tempo = 28
        data.setDate(data.getDate() + 28)
    } else if(vacina.toLowerCase() === "pfizer"){
        tempo = 90
        data.setDate(data.getDate() + 90)
    } else if(vacina.toLowerCase() === "astrazenica") {
        tempo = 90
        data.setDate(data.getDate() + 90)
    } else {
        alert("Vacina digitada incorretamente.")
    }

    return `Olá ${name}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data.toLocaleDateString()}.`
}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    let usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

   for (n of usuarios) {
    if (n.nome === nomeDoUsuario){
        n.imunizacao = "completa"
        return usuarios
    }
   }

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for (n of usuarios){
        if (n.imunizacao === "incompleta"){
            console.log(`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }

}
console.log(avisoAosAtrasados());
*/

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {

    const nomeDoUsario = prompt("Digite seu nome:");
    const anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"));
    const idade = 2022 - anoDeNascimento;

    if (idade < 18){
        alert("Para se cadastrar precisa ter 18 anos")
        return
    }

    const nacionalidade = prompt("Insira sua nacionalidade:").toLowerCase();

    if (nacionalidade !== "brasileiro" && nacionalidade !== "brasileira"){
        alert("Para se cadastrar precisa ser brasileiro")
        return
    }

    const senhaDoUsuario = prompt("Insira uma senha (min. 6 caracteres):");

    
    if(senhaDoUsuario.length < 6){
        alert("Sua senha deve ter pelo menos 6 caracteres")
        return
    }

    const vacina = prompt("Insira a vacina de primeira dose:").toLowerCase()


    if (idade >= 18 && senhaDoUsuario.length >= 6 ){
        if (nacionalidade === "brasileiro" || nacionalidade === "brasileira"){
            usuarios.push({nome: nomeDoUsario, ano: anoDeNascimento, nacionalidade: nacionalidade, senha: senhaDoUsuario, vacina: vacina, imunizacao: "incompleta"})
            alert("Usuário cadastrado com sucesso!")
        }}
    
        console.log("Usuário:", usuarios)
}

cadastro();

const login = prompt("Insira seu login:")
const senhaLogin = prompt("Insira sua senha:")

const verificaLogin = () => {
    const loginUsuario = usuarios.find((usuario) => usuario.nome === login)
    const senhaUsuario = usuarios.find((usuario) => usuario.senha === senhaLogin)

    if(loginUsuario && senhaUsuario){
        console.log(`Bem-vindo(a) ${login}`)
       } else{
        console.log("Dados inválidos")
       }
}

verificaLogin();

let verificaVacina
let verificaSegundaDose

for (n of usuarios) {
    if (n.nome === login){
        verificaVacina = n.vacina
    }
}


const primeiraDose = () => {

    let tempo = 0
    let data = new Date()

        if(verificaVacina === "coronavac"){
            tempo = 28
            data.setDate(data.getDate() + 28)
        } else if(verificaVacina === "pfizer"){
            tempo = 90
            data.setDate(data.getDate() + 90)
        } else if(verificaVacina === "astrazenica") {
            tempo = 90
            data.setDate(data.getDate() + 90)
        } else {
            alert("Vacina digitada incorretamente.")
        }

    verificaSegundaDose = confirm("Já tomou duas doses?")

    if (!verificaSegundaDose){
        return `Olá ${login}! A próxima dose da ${verificaVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data.toLocaleDateString()}.`
    }
    
}
    
console.log(primeiraDose())


const segundaDose = (nomeDoUsuario) => {

   if (verificaSegundaDose){
    for (n of usuarios) {
        if (n.nome === nomeDoUsuario){
            n.imunizacao = "completa"
            return `Olá ${login}! Sua imunização está completa (por enquanto). Verifique as datas no posto local para a terceira e quarta doses.`
        }
    }
   }
}
console.log(segundaDose(login));


/*
const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());*/