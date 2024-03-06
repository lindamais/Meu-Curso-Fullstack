
async function procurar(params) {
    let busca = await fetch("salgados.json")
    let produtos = await busca.json()
    let grupoDiv = document.getElementById("Lista")
    for (let p of produtos){
        grupoDiv.innerHTML+=`
            <div class="salgados">
            <img src="${p.imagem}" width="auto" height="200">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preço}</p>
            <p>${p.sabor}</p>
            
            
        

        </div>   
    `
}
}
procurar()  
    
