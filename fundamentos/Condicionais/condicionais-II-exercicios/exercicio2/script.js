let nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase()

let countries = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]

switch (nacionalidade) {
    case countries[0]:
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
     break;
    
    case countries[1]:
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
    break;

    case countries[2]:
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
    break;

    case countries[3]:
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
    break;

    case countries[4]:
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
    break;

    default:
    console.log("Nacionalidade não encontrada e não está apta no programa.")
    
    break;
}
