document.addEventListener("DOMContentLoaded", function () {

    list = document.querySelector(".list")
    list_titulo = document.querySelector(".list_titulo")
    historia_head = document.querySelector(".historia_head")
    historias = document.querySelector(".historias")

    texto = localStorage.getItem("myData")
    titulo = localStorage.getItem("myData2")

    newElement = document.createElement("li")
    newElement2 = document.createElement("li")

    content = document.createTextNode(texto)
    content2 = document.createTextNode(titulo)
    newElement.appendChild(content)
    newElement2.appendChild(content2)

    list_titulo.appendChild(newElement2)
    list.appendChild(newElement)
});