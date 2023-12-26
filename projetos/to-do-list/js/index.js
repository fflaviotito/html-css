/* Seleção de elementos */
// Seleção das caixas de formulário e corpo do container de tarefas
const addForm = document.querySelector('.add-form');
const editForm = document.querySelector('.edit-form');
const toolsForm = document.querySelector('.tools-form');
const corpo = document.getElementById('corpo');

// Seleção dos elementos do formulario para adicionar novas tarefas
const input_addForm = document.querySelectorAll('.input-controls') [0];

// Seleção dos elementos do formulario para editar tarefas
const input_editForm = document.querySelectorAll('.input-controls') [1];

// Seleção de todos os botões
const button_addForm = document.querySelectorAll('.button-icons');

/* Lista de eventos */
// Evento para adicionar novas tarefas
button_addForm[0].addEventListener('click', (event) => {
    adicionar_tarefa();
});

// Evento para os botões das tarefas
document.addEventListener('click', (event) => {
    const buttonTarget = event.target;
    const divTarget = buttonTarget.closest('div');
    // Caso sejar o de concluir
    if (event.target.matches('.check')) {
        check_tarefa(divTarget);
    };
    // Caso sejar o de editar
    if (event.target.matches('.edit')) {
        edit_tarefa(divTarget);
    };
    // Caso sejar o de remover
    if (event.target.matches('.delete')) {
        delete_tarefa(divTarget);
    };
});

/* Funções */
// Função que será executada quando uma nova tarefa for adicionada
function adicionar_tarefa() {
    // Verificar se foi escrito algo antes de adicionar uma tarefa
    if (input_addForm.value == "") {
        alert('Dê algum nome a sua tarefa');
        return;
    };
    // Criar a divisão onde será alocado a nova tarefa
    let listItem = document.createElement('div');
    listItem.classList.add('list-item');
    corpo.appendChild(listItem);
    // Adicionar o título da tarefa na nova divisão
    let listTitle = document.createElement('h2');
    listTitle.classList.add('list-title');
    listTitle.innerHTML = input_addForm.value;
    listItem.appendChild(listTitle);
    // Adicionar os botões na nova divisão
    let button = ["check", "edit", "delete"];
    for (let c = 0; c < 3; c++) {
        let listButton = document.createElement('button');
        let buttonIcon = document.createElement('span');
        listButton.classList.add(button[c]);
        buttonIcon.classList.add('material-symbols-outlined');
        buttonIcon.innerHTML = button[c];
        listButton.appendChild(buttonIcon);
        listItem.appendChild(listButton);
    };
    input_addForm.value = '';
    input_addForm.focus();
}

// Função que será executada quando uma tarefa for concluida
function check_tarefa(divTarget) {
    divTarget.classList.toggle('list-item-activated');
};

// Função que será executada quando uma tarefa for editada
function edit_tarefa(divTarget) {
    const title = divTarget.querySelector('h2').innerHTML;
    input_editForm.value = title
    addForm.style.display = "none";
    editForm.style.display = "block";
    toolsForm.style.display = "none";
    corpo.style.display = "none";
    // Evento para os botões do formulário de edição
    editForm.addEventListener('click', (event) => {
    // Caso seja o de confirmar
    if (event.target.matches('.button-icons')) {
        
    };
    // Caso seja o de cancelar
    if (event.target.matches('.cancel-button')) {
        sair_edit_tarefa();
    };
});
};

// Função que será executada quando uma tarefa for removida
function delete_tarefa(divTarget) {
    corpo.removeChild(divTarget);
};

// Função para confirmar a edição da tarefa, será executada quando o botão de concluir do formulário de edição for clicado
function confirm_edit_tarefa(divTarget) {
    
};

// Função para alterar o display dos formulários e voltar a tela padrão
function sair_edit_tarefa() {
    addForm.style.display = "block";
    editForm.style.display = "none";
    toolsForm.style.display = "flex";
    corpo.style.display = "block";
};