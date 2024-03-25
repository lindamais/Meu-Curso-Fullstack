async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()

    //document.body.innertHTML
    let parametros = new URLSearchParams (window.location.search)
    let parametroID = parametros.get("produto-id")
    
    let id
    for(let x in produtos){
        if (produtos[x].id==parametroID) {
            id=x
          
        }
    }
 
    document.body.innerHTML=`
    <h1>${produtos[id].nome}</h1>
    <img src="${produtos[id].img}" height="250" width="250">
    <p>${produtos[id].descrição}</p>
    <span>R$${produtos[id].valorComDesconto.toFixed(2).replace(".",",")}</span>
    <span>R$${produtos[id].valorSemDesconto.toFixed(2).replace(".",",")}</span>
    `
}
buscarDetalhes()