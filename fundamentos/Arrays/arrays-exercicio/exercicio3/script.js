
//Exercício 3

const arrayNumbers = [09,07,94,28,15,18]
const arrayStrings = ["Copa do Mundo", "Brasil", "Hexa vem!!!", "Brasil, o único Pentacampeão"]
const arrayMixted = [94, "Tetracampeão", true]

//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNumbersCopia = arrayNumbers.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMixtedCopia = arrayMixted.slice()

//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumbersCopia.unshift(0)

console.log(arrayNumbers)
console.log(arrayNumbersCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringsCopia.pop()

console.log(arrayStrings)
console.log(arrayStringsCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayMixtedCopia.splice(1,1)

console.log(arrayMixted)
console.log(arrayMixtedCopia)