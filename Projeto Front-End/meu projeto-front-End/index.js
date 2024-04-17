async function buscar(){
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()

    let divLista = document.getElementById("lista-card")
    for(let produto of produtos){
        divLista.innerHTML+=`
        
             <div class="card" data-id="${produto.id}">
             <h3>${produto.nome}</h3>
             <img class="imagem" src="${produto.img[0]}" width="200" height="200">
             <p>${produto.sabor}</p>
             <span>R$ ${produto.preco_unitario.toFixed(2).replace(".",",")}</span>
        `
    }
    let divsCards = document.getElementsByClassName("card")
    for(let card of divsCards){
        card.addEventListener("click", clicou)

    }
}
function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}
buscar()
function clik(){
    let clik = document.getElementById("informaçoes")
    window.scrollTo({top:clik.offsetTop, behavior:"auto"})
}
function toque(){
    let clik = document.getElementById("produtos")
    window.scrollTo({top:clik.offsetTop, behavior:"auto"})
}
function escolha(){
    let clik = document.getElementById("localização")
    window.scrollTo({top:clik.offsetTop, behavior:"auto"})
}