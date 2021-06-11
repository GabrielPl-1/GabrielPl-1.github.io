document.addEventListener("DOMContentLoaded", function () {

    historia_head = document.querySelector(".historia_head_novo")
    historias = document.querySelector(".historias_novo")

    texto = localStorage.getItem("myData")
    titulo = localStorage.getItem("myData2")

    newElement = document.createElement("li")
    newElement2 = document.createElement("li")

    content = document.createTextNode(texto)
    content2 = document.createTextNode(titulo)
    newElement.appendChild(content)
    newElement2.appendChild(content2)

    historia_head.appendChild(newElement2)
    historias.appendChild(newElement)
});