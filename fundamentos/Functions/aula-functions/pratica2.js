function pratica2(num) {
    const verifica = num % 2 === 0;
    const soma = num + 10;
    const multiplicacao = num * num;

    return `O número ${num} é par? ${verifica}.
Somado com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${multiplicacao}`
}


const resultado = Number(prompt("Informe um número:"))
console.log(pratica2(resultado))