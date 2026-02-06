warningElement = document.querySelector(".alert")
contentElement = document.querySelector(".alert-text")

let content = ""

if (content !== "") {
    warningElement.style.display = "flex"
    contentElement.innerHTML = content
}