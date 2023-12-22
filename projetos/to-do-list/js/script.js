var editForm = document.getElementsByClassName('edit-form') [0]
editForm.style.display = "block"

var quantList = 0

// Defini o que será execitado, de acordo com o botão
document.addEventListener('click', (event) => {
    if (event.target.matches('#add-button')){
        adicionar()
    }
})

function adicionar() {
    // Coletar o texto digitado pelo usuário
    var input = document.getElementById('add-tarefa')
    var add = input.value
    // Verificar se foi escrito algo antes de adicionar uma tarefa
    if (add == "") {
        alert('Dê algum nome a sua tarefa')
        return
    }
    //Criar a divisão onde será alocado a nova tarefa
    var corpo = document.getElementById('corpo')
    var newListItem = document.createElement('div')
    newListItem.classList.add(`list-item`)
    newListItem.classList.add(`list-${quantList}`)
    newListItem.id = `list-item`
    corpo.appendChild(newListItem)
    // Adicionar o título da tarefa na nova divisão
    var title_newListItem = document.createElement('h2')
    title_newListItem.classList.add('list-title')
    title_newListItem.classList.add(`list-${quantList}`)
    title_newListItem.id = `list-title`
    title_newListItem.innerHTML = add
    newListItem.appendChild(title_newListItem)
    //Adicionar os botões na nova divisão
    var button = ["check", "edit", "delete"]
    for (var c = 0; c < 3; c++) {
        var newButton = document.createElement('button')
        newButton.classList.add('list-button-icons')
        newButton.classList.add(`list-${quantList}`)
        newButton.id = `list-${button[c]}-button`
        var newIcon = document.createElement('span')
        newIcon.classList.add('material-symbols-outlined')
        newIcon.innerHTML = `${button[c]}`
        newButton.appendChild(newIcon)
        newListItem.appendChild(newButton)
    }
    quantList++
    console.log(quantList)
}