
//Exercício 2

const arrayNumbers = [09,07,94,28,15,18]
const arrayStrings = ["Copa do Mundo", "Brasil", "Hexa vem!!!", "Brasil, o único Pentacampeão"]
const arrayMixted = [94, "Tetracampeão", true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNumbers.length)
console.log(arrayStrings.length)
console.log(arrayMixted.length)


//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNumbers[0])
console.log(arrayStrings[1])
console.log(arrayMixted[2])


//- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 

console.log(arrayNumbers.includes(94))
console.log(arrayNumbers.includes(98))