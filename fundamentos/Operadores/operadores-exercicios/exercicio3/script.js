// PARTE 1

const operacao1 = 5 > 20 && 5 < 2;
console.log(operacao1);

const operacao2 = 5 === 5 || 5 === "5";
console.log(operacao2);

const operacao3 = !(20 > 50);
console.log(operacao3);

const operacao4 = !(20 > 50 || 50 > 60);
console.log(operacao4);


// PARTE 2

const salarioFulanoDaSilva = 2000;
const filhos = 2;
const auxilioCrechePorFilho = 45.50 * filhos;
const salarioMaisAuxilio = salarioFulanoDaSilva + auxilioCrechePorFilho;


//JANEIRO
const vendasJaneiro = 5784.50;
const comissaoJaneiro = vendasJaneiro * 0.1;
const descontoInssJaneiro = (salarioFulanoDaSilva+comissaoJaneiro)*0.05;
const salarioJaneiro = salarioMaisAuxilio+comissaoJaneiro-descontoInssJaneiro;

console.log("O salário de Fulando da Silva em Janeiro é de R$"+ salarioJaneiro.toFixed(2))


//FEVEREIRO
const vendasFevereiro = 3418.41;
const comissaoFevereiro = vendasFevereiro * 0.1;
const descontoInssFevereiro = (salarioFulanoDaSilva+comissaoFevereiro)*0.05;
const salarioFevereiro = salarioMaisAuxilio+comissaoFevereiro-descontoInssFevereiro;

console.log("O salário de Fulando da Silva em Fevereiro é de R$"+ salarioFevereiro.toFixed(2))


//MARÇO
const vendasMarco = 4124.10;
const comissaoMarco = vendasMarco * 0.1;
const descontoInssMarco = (salarioFulanoDaSilva+comissaoMarco)*0.05;
const salarioMarco = salarioMaisAuxilio+comissaoMarco-descontoInssMarco;

console.log("O salário de Fulando da Silva em Março é de R$"+salarioMarco.toFixed(2))


//ABRIL
const vendasAbril = 1874;
const comissaoAbril = vendasAbril * 0.1;
const descontoInssAbril = (salarioFulanoDaSilva+comissaoAbril)*0.05;
const salarioAbril = salarioMaisAuxilio+comissaoAbril-descontoInssAbril;

console.log("O salário de Fulando da Silva em Abril é de R$"+salarioAbril.toFixed(2))


//MAIO
const vendasMaio = 7000;
const comissaoMaio = vendasMaio * 0.1;
const descontoInssMaio = (salarioFulanoDaSilva+comissaoMaio)*0.05;
const salarioMaio = salarioMaisAuxilio+comissaoMaio-descontoInssMaio;

console.log("O salário de Fulando da Silva em Maio é de R$"+salarioMaio.toFixed(2))


//JUNHO
const vendasJunho = 9450;
const comissaoJunho = vendasJunho * 0.1;
const descontoInssJunho = (salarioFulanoDaSilva+comissaoJunho)*0.05;
const salarioJunho = salarioMaisAuxilio+comissaoJunho-descontoInssJunho;

console.log("O salário de Fulando da Silva em Junho é de R$"+salarioJunho.toFixed(2))

//PRIMEIRO SEMESTRE

console.log("O total de salário recebido no primeiro semestre é de R$"+(salarioJaneiro+salarioFevereiro+salarioMarco+salarioAbril+salarioMaio+salarioJunho).toFixed(2));


//MÉDIA DE SALÁRIOS
const mediaSalarioPrimeiroSemestre = (salarioJaneiro+salarioFevereiro+salarioMarco+salarioAbril+salarioMaio+salarioJunho) / 6;

console.log("A média salarial de Fulando da Silva no primeiro semestre é de R$"+mediaSalarioPrimeiroSemestre.toFixed(2));