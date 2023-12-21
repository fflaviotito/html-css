var editForm = document.getElementsByClassName('edit-form') [0];
editForm.style.display = "block"

var buttons = document.querySelectorAll(".button-icons")
document.addEventListener("click", (event) => {
    if (event.target.matches('#add-button')) {
        console.log('clicou')
    }
})