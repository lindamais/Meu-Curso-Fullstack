async function loja(){
    let busca = await fetch("produtos.json")
    let produtos = await busca.json()
    let grupoDiv = document.getElementById("lista-card")
    for(let produto of produtos){
        grupoDiv.innerHTML = `
            <div class="card">
                <h3></h3>
                <p></p>
                <p></p>
            </div>
        `
    }

}
loja()