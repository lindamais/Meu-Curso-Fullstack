async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")
    let indiceProd
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indiceProd = x
        }
    }
 
    document.getElementById("detalhes").innerHTML += `
        <h3>${produtos[indiceProd].nome}</h3>
        <img src="${produtos[indiceProd].img[0]}" id="frame" width="250" height="250" style="border: 1px solid #000; border-radius: 10px">
        <div class="miniaturas" id="miniaturas">
        </div>
        <p>${produtos[indiceProd].produto}</p>
        <span>${produtos[indiceProd].sabor}</span>
        <span>R$ ${produtos[indiceProd].preco_unitario.toFixed(2).replace(".",",")}</span>
        `

    let divMiniaturas = document.getElementById("miniaturas")
    for(let y of produtos[indiceProd].img){
        divMiniaturas.innerHTML += `
            <img src="${y}" class="mini" width="80" height="80" style="border: 1px solid #000; border-radius: 10px">
        `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let a of minizinhas){
        a.addEventListener("mouseover", deslize)
    }
}

function deslize(){
    document.getElementById("frame").src = this.src
}

buscarDetalhes()