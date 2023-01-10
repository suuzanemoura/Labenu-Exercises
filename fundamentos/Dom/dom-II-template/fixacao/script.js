
const insereItem = (event) => {
    event.preventDefault();

    const list = document.getElementById("lista");

    let newFruit = document.getElementById("meu-input")

    const newLi = document.createElement("li");
    
    newLi.innerHTML = newFruit.value;

    list.appendChild(newLi);

    newFruit.value = "";
}