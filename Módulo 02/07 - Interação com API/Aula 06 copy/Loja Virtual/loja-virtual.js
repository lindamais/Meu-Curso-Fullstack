async function procurar(params) {
    let busca = await fetch("camiseta.json")
    let produtos = await busca.json()
    let grupoDiv = document.getElementById("Lista-card")
    for (let p of produtos){
        grupoDiv.innerHTML+=`
            <div class="camisetas">
            <img src="${p.imagem}" width="auto" height="200">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preço}</p>
            <button>comprar</button>
            
        

        </div>   
    `
}
}
procurar()  
