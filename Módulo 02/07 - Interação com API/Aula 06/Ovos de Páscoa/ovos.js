(async function() {
    let resposta, produtos;

    resposta = await fetch("ovos.json");
    produtos = await resposta.json();

    let grupoDiv = document.getElementById("ovos");
    grupoDiv.innerHTML = produtos.map(p => `
        <div class="card">
            <img src="${p.nome}" width="auto" height="200">
            <h3>${p.imagem}</h3>
        
        
respoata();