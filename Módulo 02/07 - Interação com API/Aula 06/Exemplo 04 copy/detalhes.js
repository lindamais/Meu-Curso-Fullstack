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
    <img src=${produtos[id].img}>
    <h1>${produtos[id].nome}</h1>`
}
buscarDetalhes()