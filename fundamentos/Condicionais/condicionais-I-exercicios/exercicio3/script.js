
let nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase()

let countries = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]

if (nacionalidade === countries[0]){
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
} else if (nacionalidade === countries[1]) {
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
} else if (nacionalidade === countries[2]) {
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
} else if (nacionalidade === countries[3]) {
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
} else if (nacionalidade === countries[4]) {
    console.log("Sua nacionalidade é", nacionalidade, "e está apta no programa.")
} else {
        console.log("Nacionalidade não encontrada e não está apta no programa.")
}
