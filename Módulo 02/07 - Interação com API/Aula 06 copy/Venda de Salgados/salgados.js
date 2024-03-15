
async function procurar(params) {
    let busca = await fetch("salgados.json")
    let produtos = await busca.json()
    let grupoDiv = document.getElementById("lanche")
    for (let p of produtos){
        grupoDiv.innerHTML+=`
            <div class="card">
            <img src="${p.imagem}" width="auto" height="200">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preço.toFixed(2)}</p>
            <p>${p.sabor}</p>
            
            
        

        </div>   
    `
}
}
procurar()  
    