import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => { handleClick(event, false) })
})

function handleClick(event, check = true) {
    event.preventDefault()

    const text = {
        title: check ? "Marcar pergunta" : "Excluir pergunta",
        description: check ? "Tem certeza que deseja marcar como lida" : "Tem certeza que deseja excluir",
        button: check ? "Sim, marcar" : "Sim, excluir",
    }
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const form = document.querySelector(".modal form")
    const questionId = event.target.dataset.id

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = text.title
    modalDescription.innerHTML = text.description + " esta pergunta?"
    modalButton.innerHTML = text.button
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()

}
