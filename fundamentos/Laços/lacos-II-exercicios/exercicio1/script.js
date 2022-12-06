const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


for (let jogador = 0; jogador < array.length; jogador++){

    console.log(`Jogador ${jogador+1}:`)
    for (let gol of array[jogador]){
        console.log(`${gol} gols na Temporada ${array[jogador].indexOf(gol)+1}`)
    }

    
    //EXEMPLO ANALICE
    /*for (let gol = 0; gol < array[jogador].length; gol++){
        console.log(`${array[jogador][gol]} gols na temporada ${gol+1}`)
    }*/

    console.log(`\n`)
}

