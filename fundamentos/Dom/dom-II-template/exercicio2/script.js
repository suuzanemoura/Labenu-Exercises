const escondeSenha = (event) => {
    const password = document.getElementById("password")

    const mensagem = document.getElementById("mensagem")

    event.preventDefault();

    if (password.type == "password"){
        password.type = "text";
        mensagem.textContent = "esconder senha";
    } else {
    password.type = "password";
    mensagem.textContent = "mostrar senha";
  }
}

const form = document.querySelector(".light");

form.classList.remove("light");
form.classList.add("dark");
