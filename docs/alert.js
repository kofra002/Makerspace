import alert from "./assets/JSON/alert.json" with { type: 'json' }

const alertElement = document.querySelector(".alert")
const alertContentElement = document.querySelector(".alert-text")

if (alert.active) {
    alertElement.style.display = "flex"
    alertContentElement.innerHTML = alert.content
}