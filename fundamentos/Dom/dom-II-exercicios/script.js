
const adicionaItem = (event) => {

    const container = document.getElementById("container")

    const newArticle = document.createElement("article")

    newArticle.setAttribute("class", "item2")

    newArticle.setAttribute("onclick", "removeItem(event)")

    container.insertAdjacentElement('beforeend', newArticle)
}

const removeItem = (event) => {
    event.target.remove()
}