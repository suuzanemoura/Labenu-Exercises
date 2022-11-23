
const loginDigitado = prompt("Insira seu login:")
const senhaDigitada = prompt("Insira sua senha:")

const pratica3 = (loginDigitado, senhaDigitado) => {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "senha"
    
    return loginDigitado === loginArmazenado &&
           senhaDigitada === senhaArmazenada
    
    }
    
    
    console.log(pratica3(loginDigitado, senhaDigitada))
    pratica3(loginDigitado, senhaDigitada) === true && console.log("Login realizado com sucesso!")
    pratica3(loginDigitado, senhaDigitada) === false && console.log("Login não realizado! Tente novamente!")