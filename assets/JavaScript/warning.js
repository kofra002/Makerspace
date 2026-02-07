warningElement = document.querySelector(".alert")
contentElement = document.querySelector(".alert-text")

// Hvis variablen inneholder noe innhold (altså ikke "") vil det bli presentert i en varslingsboks
let content = ""

if (content !== "") {
    warningElement.style.display = "flex"
    contentElement.innerHTML = content
}