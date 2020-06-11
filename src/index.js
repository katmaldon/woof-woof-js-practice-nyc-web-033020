document.addEventListener("DOMContentLoaded", () => {


    fetch("url")
    .then(response => response.json())
    .then(dataArray => nextFunction(dataArray)

})
