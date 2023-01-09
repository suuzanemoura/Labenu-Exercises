
const pessoa = [{
    nome: nome.value,
    endereço: endereco.value,
    email: email.value
}]

console.log(pessoa)


const limpaInputs = () => {
    nome.value = ''
    endereco.value = ''
    email.value = ''
}