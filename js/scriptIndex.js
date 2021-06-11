document.addEventListener("DOMContentLoaded", function () {
    dataToInput = document.querySelector(".dataToInput")
    tituloToInput = document.querySelector(".titulo_box")
    sendData = document.querySelector(".sendData")

    sendData.addEventListener("click", saveData)

    function saveData() {
        localStorage.setItem("myData2", tituloToInput.value)
        localStorage.setItem("myData", dataToInput.value)
    }
});