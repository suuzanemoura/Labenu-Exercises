ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = 0
  
  for (let i in arrayDeNumeros){
    if(arrayDeNumeros[i] === numeroEscolhido){
      ocorrencias++
    }
  }
  
  if (ocorrencias > 0){
     return`O número ${numeroEscolhido} aparece ${ocorrencias}x`
  } else {
    return "Número não encontrado"
  }
}
ˋˋˋ