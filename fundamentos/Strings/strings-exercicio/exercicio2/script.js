let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.length)


//a) Remova o excesso de espaços no final da string;

minhaString = minhaString.trim()

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(minhaString.length)

// c) Substitua os traços `________` por “sticioso”.

minhaString = minhaString.replace("________", "sticioso")
console.log(minhaString)