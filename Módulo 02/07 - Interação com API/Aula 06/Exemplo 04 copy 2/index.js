//Função assíncrona para fazer uso do Await
async function buscarTreinando(){
    //await para a execução do programa aguardando
    //o resultado do comando Fetch().
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()

    let divLista = document.getElementById("lista-card")
    for(let produto of produtos){
        divLista.innerHTML += `
        
            <div class="card" data-id="${produto.id}">
            
            <h3>${produto.nome}</h3>
            <img src="${produto.img}" width="160" height="260" </h3>    
            <p>${produto.descrição}</p>
            <div class="valores"> 
                <span class="valorCom">R$ ${produto.valorComDesconto.toFixed(2).replace(".",",")}</span>
                <span class="valorSem">R$ ${produto.valorSemDesconto.toFixed(2).replace(".",",")}</span>
                
            </div>

        </div>
    `
    
}

        let divsCards = document.getElementsByClassName("card")
        for(let card of divsCards){
        card.addEventListener("click",clicou)   
    }
}
        function clicou(){
            let elementoId = this.getAttribute("data-id")
            window.location.href = "detalhes1.html?produto-id=" + elementoId
        }   


buscarTreinando()