const checaCaps = (event) => {
    const mensagem = document.getElementById("mensagem")
    if(event.key ==="Shift"){
        mensagem.textContent = "ATENÇÃO: SEGURANDO SHIFT."
      } else {
        mensagem.textContent = ""
      }
} 