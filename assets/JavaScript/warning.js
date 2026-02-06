warningElement = document.getElementById('warning')
contentElement = document.getElementById('warningContent')

let content = ""

if (content !== "") {
    warningElement.style.display = "flex"
    contentElement.innerHTML = content
}