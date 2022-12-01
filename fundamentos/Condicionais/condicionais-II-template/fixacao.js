

let number = Number(prompt("Insira um número que seja divisível por 2 e 3:"))

if (number%2 === 0){

    if (number%3 === 0){
        console.log("O número é divisível por 2 e 3.")

        // number == 30? console.log("UFA ACERTEI!") : console.log("Não foi dessa vez! :(")

        switch (number) {
            case 6:
                console.log("Seu número é 6")
                break;

            case 12:
                 console.log("Seu número é 12")
                 break;

            case 18:
                console.log("Seu número é 18")
                break;
            
            case 24:
                    console.log("Seu número é 24")
                    break;

            case 30:
                    console.log("Seu número é 30")
                    break;
        
            default:
                console.log("O número é maior que 30 ou menor que 6.")
                break;
        }



    } else {
        console.log("O número é somente divisível por 2")
    }
} else {
    console.log("O número não é divisivel por 2 e por 3 ao mesmo tempo.")
}


if (number%2 === 0 && number%3 === 0) {
    console.log("O número é divisível por 2 e 3.")
}