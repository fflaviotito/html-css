var editForm = document.getElementsByClassName('edit-form') [0]

var quantList = 0

var corpo = document.getElementById('corpo')

// Defini o que será executado, de acordo com o botão selecionado
document.addEventListener('click', (event) => {
    // Executado caso o botão de adicionar tarefa seja clicado
    if (event.target.matches('#add-button')){
        adicionar()
    }
    // Executado caso algum botão das tarefa seja clicado
    if (event.target.matches('.list-button-icons')) {
        var element = document.getElementById(event.target.id)
        var list = element.classList
        var classe = list[1]
        var span = document.getElementById(`span-${event.target.id}`)
        botao_tarefa(element, classe, span)
    }
})

// Função para adicionar uma nova tarefa
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
        newButton.id = `list-${button[c]}-button-${quantList}`
        var newIcon = document.createElement('span')
        newIcon.classList.add('material-symbols-outlined')
        newIcon.id = `span-list-${button[c]}-button-${quantList}`
        newIcon.innerHTML = `${button[c]}`
        newButton.appendChild(newIcon)
        newListItem.appendChild(newButton)
    }
    input.value = ""
    input.focus()
    quantList++
}

// Função para os botões das tarefas
function botao_tarefa(element, classe, span) {
    // Definindo as variáveis utilizadas em qualquer situação
    var boxList = document.getElementsByClassName(classe)[0]
    var title = document.getElementsByClassName(classe)[1]
    // Caso o botão de concluir seja clicado
    if (span.innerHTML == "check") {
        // Verificando se o botão de concluido está sendo habilitado ou desabilitado
        if (boxList.classList.length == 2) {
            title.classList.add('list-title-activated')
            boxList.classList.add('list-item-activated')
        } else {
            title.classList.remove('list-title-activated')
            boxList.classList.remove('list-item-activated')
        }
    }
    // Caso o botão de editar seja clicado
    if (span.innerHTML == "edit") {
        // Retirando todas as janelas e deixando apenas a de edição
        editForm.style.display = "block"
        var input = document.getElementById('edit-tarefa')
        input.value = title.innerHTML
        var addForm = document.getElementsByClassName('add-form')[0]
        addForm.style.display = "none"
        var toolsForm = document.getElementsByClassName('tools-form')[0]
        toolsForm.style.display = "none"
        corpo.style.display = "none"
        // Verificando se a edição vai ser conformada ou cancelada
        document.addEventListener('click', (edit) => {
            if (edit.target.matches('#edit-button')) {
                title.innerHTML = input.value
                editForm.style.display = "none"
                addForm.style.display = "block"
                toolsForm.style.display = "flex"
                corpo.style.display = "block"
            }
            if (edit.target.matches('#edit-cancel-button')) {
                editForm.style.display = "none"
                addForm.style.display = "block"
                toolsForm.style.display = "flex"
                corpo.style.display = "block"
            }
        })
    }
    // Caso o botão de cancelar seja clicado
    if (span.innerHTML == "delete") {
        corpo.removeChild(boxList)
    }
}