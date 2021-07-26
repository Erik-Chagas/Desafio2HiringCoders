let clientList = []
let productList = []
let clientesNumber = 0
let produtosNumber = 0

const sidebarOptions = document.getElementsByClassName('sections')
const formCliente = document.getElementById('formulario-cliente')
const formProduto = document.getElementById('formulario-produto')

const clientDiv = document.getElementById('clientes-div')
const productDiv = document.getElementById('produtos-div')

const clientButton = document.getElementById('clients-button')
const productButton = document.getElementById('products-button')

clientButton.addEventListener("click", () => {
    productDiv.style.display = 'none'
    clientDiv.style.display = 'flex'
    console.log('cliente')
})

productButton.addEventListener("click", () => {
    productDiv.style.display = 'flex'
    clientDiv.style.display = 'none'
    console.log('produto')

})

if(localStorage.hasOwnProperty('clientList')){
    clientList = JSON.parse(localStorage.getItem('clientList'))
} else {
    localStorage.setItem('clientList', JSON.stringify(clientList))
    clientesNumber = JSON.parse(localStorage.getItem('clientList')).length
}

if(localStorage.hasOwnProperty('productList')){
    productList = JSON.parse(localStorage.getItem('productList'))
} else {
    localStorage.setItem('productList', JSON.stringify(productList))
    produtosNumber = JSON.parse(localStorage.getItem('productList')).length
}

formCliente.addEventListener('submit', (e) => {
    clientesNumber = JSON.parse(localStorage.getItem('clientList')).length
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let sexo = document.getElementById('sexo').value
    let telefone = document.getElementById('telefone').value
    let cep = document.getElementById('cep').value
    let estado = document.getElementById('estado').value
    let municipio = document.getElementById('municipio').value
    let id = clientesNumber + 1
    clientesNumber++

    let data = {
        id,
        nome,
        email,
        sexo,
        telefone,
        cep,
        estado,
        municipio
    }

    let dadosJSON = JSON.stringify(data)
    clientList = JSON.parse(localStorage.getItem('clientList'))
    clientList.push(data)

    localStorage.setItem('clientList', JSON.stringify(clientList))
})

formProduto.addEventListener('submit', (e) => {
    produtosNumber = JSON.parse(localStorage.getItem('productList')).length
    e.preventDefault();
    let nomeProduto = document.getElementById('nome-produto').value
    let quantidade = document.getElementById('quantidade').value
    let categoria = document.getElementById('categoria').value
    let id = produtosNumber + 1
    produtosNumber++

    let data = {
        id,
        nomeProduto,
        quantidade,
        categoria
    }

    let dadosJSON = JSON.stringify(data)
    productList = JSON.parse(localStorage.getItem('productList'))
    productList.push(data)

    localStorage.setItem('productList', JSON.stringify(productList))
})

