alert("Olá! Responda o questionário corretamente para traçarmos o seu perfil na empresa.");

const nomeCompleto = prompt("Qual é o seu nome completo?");
const dataDeNascimento = prompt("Qual é a sua data de nascimento? Responda (DD/MM/AAAA)");
let endereco = prompt("Qual é o seu endereço?");
const cpf = prompt("Qual é o seu CPF?");
let escolaridade = prompt("Qual é a sua escolaridade?");
let cnh = prompt("Possui CNH?");
let filhos = prompt("Quantos filhos possui?");
let cargoAtual = prompt("Qual é o seu cargo atual?");
let salario = prompt("Qual é o seu salário?");
let comissao = prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero.");
let demissao = prompt("Informe ano da sua última demissão.");

console.log(typeof nomeCompleto);
console.log(typeof Number(dataDeNascimento));
console.log(typeof endereco);
console.log(typeof Number(cpf));
console.log(typeof escolaridade);
console.log(typeof cnh);
console.log(typeof Number(filhos));
console.log(typeof cargoAtual);
console.log(typeof Number(salario));
console.log(typeof Number(comissao));
console.log(typeof Number(demissao));


console.log("Perfil do usuário: Seu nome completo é", nomeCompleto+", sua data de nascimento é", dataDeNascimento+", seu endereço é", endereco+", seu CPF é", cpf+", seu nível de escolaridade é", escolaridade+",", cnh,"possui CNH, seu número de filhos é", filhos+", seu cargo atual é de", cargoAtual+", seu salário atualmente é de", salario+" reais, com a comissão de", comissao+"% e sua última demissão foi no ano de", demissao+".")