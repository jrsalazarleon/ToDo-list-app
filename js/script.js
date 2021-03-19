function getInputData() {
    const documentList = document.getElementById("list-content")
    const itemList = document.createElement("li")
    const inputData = document.getElementById("input-data").value
    documentList.appendChild(itemList)
    var listElement = itemList.textContent = inputData
    itemList.style.padding="5px 0"
}

function clearInputData() {
    var inputData = document.getElementById("input-data").value = "";
}

function inputSpace() {
    let inputElement = document.getElementById("input-data")
    if (inputElement.length == 0) {
        console.log("El pepe")
    }
}

inputSpace()
