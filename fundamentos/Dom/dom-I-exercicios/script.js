const fruits = ["laranja", "limão", "uva"];


const addFruitsHtml = () => {
    for (let i in fruits){
    let fruitId = document.getElementById('fruta-'+(Number(i)+1))
    fruitId.innerHTML = fruits[i]
    }
}
addFruitsHtml ()


const addNewFruit = () => {

    if (fruits.length === 3){
        fruits.push(fruitName.value)
        addFruitsHtml ();
    } else{
        fruits.push(fruitName.value)
        let lista = document.getElementById('lista-de-frutas')
        lista.innerHTML += `<li id="fruta-${fruits.length}"></li>`
        addFruitsHtml ()
    }
    
}
