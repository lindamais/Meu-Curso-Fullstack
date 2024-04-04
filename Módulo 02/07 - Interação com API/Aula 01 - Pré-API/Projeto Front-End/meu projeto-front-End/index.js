async function buscar(){
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()

    let divLista = document.getElementById("lista-card")
    for(let produto of produtos){
        divLista.innerHTML +-`
             <div class="card" data-id="${produto.id}">
             <h3>${produto.nome}</h3
             <img src="${produto.img[0]}" width="200" height="200"/>
             <p>${produto.sabor}</p>
             <span>${produto.preço}</span>
        `
    }
    let divsCards = document.getElementsByClassName("card")
    for(let card of divsCards){
        card.addEventListener("click", clicou)

    }
}
function clicou(){
    let elementoId = this.getAttribute("data-id")
    windou.location.href = "detalhes.html?produto-id=" + elementoId
}
buscar()