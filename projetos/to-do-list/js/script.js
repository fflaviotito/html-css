var editForm = document.getElementsByClassName('edit-form') [0]
editForm.style.display = "block"

var id_ButtonListItem = []
var quant_ButtonListItem = 0

// Function que irá rodar quando o botão de adicionar tarefa for apertado
document.addEventListener('click', (event) => {
    if (event.target.matches('#add-button')){
        adicionar()
    }
})

function adicionar() {
    id_ButtonListItem.push(quant_ButtonListItem)
    quant_ButtonListItem++
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
    newListItem.id = `list-item${quant_ButtonListItem}`
    corpo.appendChild(newListItem)
    // Adicionar o título da tarefa na nova divisão
    var title_newListItem = document.createElement('h2')
    title_newListItem.classList.add('list-title')
    title_newListItem.id = `list-title${quant_ButtonListItem}`
    title_newListItem.innerHTML = add
    newListItem.appendChild(title_newListItem)
    //Adicionar os botões na nova divisão
    var button = ["check", "edit", "delete"]
    for (var c = 0; c < 3; c++) {
        var newButton = document.createElement('button')
        newButton.classList.add('button-icons')
        newButton.id = `list-${button[c]}-button${quant_ButtonListItem}`
        var newIcon = document.createElement('span')
        newIcon.classList.add('material-symbols-outlined')
        newIcon.innerHTML = `${button[c]}`
        newButton.appendChild(newIcon)
        newListItem.appendChild(newButton)
    }
    console.log(`var ${id_ButtonListItem}`)
    console.log(`tamanho ${id_ButtonListItem.length}`)
}