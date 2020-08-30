let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

// Para renderizar a lista adicionando os novos to do

// como é um simples texto
// Quando atualizar a página, ele vai buscar os valores no localStorage() e vai rencher a lista com os novos valores
let to_do = JSON.parse(localStorage.getItem('list_todos')) || [] // para tranformar num array de volta, temos que usar o JSON.parse(). Se ele não conseguir retornar um valor aceitavel no JSON.parse(), ele vai jogar um array vazio dentro da var to_do 
function renderTodos() {
    listElement.innerHTML = ``
    // to_do -> escopo global
    // todo -> escopo local do for()
    for(todo of to_do){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = to_do.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')' ) // concatenação de strings

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        // Para o todoText ficar dentro do todoElement
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        // Adicionando na ul cada um dos nossos elementos criados
        listElement.appendChild(todoElement)
    }
}
renderTodos()

function addTodo() {
    var todoText = inputElement.value // pegar o valor do input

    to_do.push(todoText)
    inputElement.value = '' // Para zerar o valor do input
    renderTodos() // pra renderizar a lista de to_do   
    saveToStorage()
}

// Para chamar a função só com o clique do botão
buttonElement.onclick = addTodo

function deleteTodo(pos) {
    // A partir da posição[pos], remova o item 1
    to_do.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

// Salvando to_do
function saveToStorage() {
    // Pode dar qualquer nome, depois passamos o valor
    // JSON é uma String e é uma variável global e o stringify() transforma vetor em String
    localStorage.setItem('list_todos', JSON.stringify(to_do)) // para setar o valor do storange
}