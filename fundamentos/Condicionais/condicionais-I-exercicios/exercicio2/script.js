let idade = 28;
let terminouEnsinoMedio = true;
let cursandoFaculdade = true;

function exercicio (age, school, university){
    
    if(age>= 18){
        console.log("A pessoa é maior de idade!")
    }else{
        console.log("A pessoa é menor de idade!")
    }
    
    if(school){
        console.log("A pessoa terminou o ensino médio!")
    }else{
        console.log("A pessoa não terminou o ensino médio!")
    }

    if(!university){
        console.log("A pessoa não está cursando alguma faculdade!")
    }else{
        console.log("A pessoa está cursando alguma faculdade!")
    }
}


exercicio (idade, terminouEnsinoMedio, cursandoFaculdade)








