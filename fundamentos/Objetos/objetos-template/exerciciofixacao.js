
const carrinho = {
    nome: "Maria",
    pagamento: "Cartão de crédito",
    endereco: "Rua João da Silva, 100 - Centro",
    compras: [compras1 = {nome: "Arroz", valor: 6, itens:5},{nome: "Feijão", valor: 5, itens:2},{nome: "Macarrão", valor: 4, itens:3}]
}



// Imprima a quantidade de compras que existem no carrinho;
// Crie uma cópia do objeto, chamada “carrinhoPresente”, que seja igual ao carrinho original, mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento alterada para cartão presente


console.log(carrinho.compras)
console.log(carrinho.compras.length)
console.log(carrinho.compras[0].itens+carrinho.compras[1].itens+carrinho.compras[2].itens)

const carrinhoPresente = {...carrinho,
    nome: "João",
    pagamento: "Cartão Presente"
}

console.log(carrinhoPresente)