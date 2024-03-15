async function buscar(){
        let busca = await fetch("proj-treino.json")
        let produtos = await busca.json()
        let grupoDiv = document.getElementById("lista-card")
        for (let p of produtos){
            grupoDiv.innerHTML+=`
                <div class="card">
                <img src="${p.imagem}" width="auto" height="200">
                <h3>${p.marca}</h3>
                <p>R$ ${p.memoria}</p>
                <p>${p.capacidadeDeDiscoSSD}</p>
                <p>${p.processador}</p>

            </div>   
        `
    }
}
buscar()