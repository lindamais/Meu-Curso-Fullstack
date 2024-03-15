async function procurar() {
    let busca = await fetch("ovos.json")
    let produtos = await busca.json()
    let o = document.getElementById("ovos")
    for (let p of produtos){ 
        o.innerHTML+=
    `
        <div class="card">
        <img src="${p.imagem}" width="auto" height="200">
        <h3>${p.nome}</h3>
        </div>   
    `
}
}
procurar()  
      