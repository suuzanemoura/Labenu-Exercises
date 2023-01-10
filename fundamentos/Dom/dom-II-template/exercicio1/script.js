const lista = document.getElementById("lista")

const item0 = document.createElement("li")

const content0 = document.createTextNode("Item 0")

item0.appendChild(content0)

const item5 = document.createElement("li")

item5.innerHTML = "Item 5"

lista.insertAdjacentElement('afterbegin', item0)

lista.insertAdjacentElement('beforeend', item5)