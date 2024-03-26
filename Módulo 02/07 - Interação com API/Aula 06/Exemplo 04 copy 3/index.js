//Função assíncrona para fazer uso do Await
async function buscar(){
    //await para a execução do programa aguardando
    //o resultado do comando Fetch().
        let procura = await fetch("lista-produtos.json")
        let produtos = await procura.json()

        let divLista = document.getElementById("lista-card")
        for(let produto of produtos){
            divLista.innerHTML += `
            
             <div class="card">
                <h3>${produto[id].nome}</h3>
                <img src="${produto[id].img}" width="160" height="260" </h3>    
                <p>${produto[id].descrição}</p>
                <div class="valores"> 
                    <span class="valorCom">R$ ${produto.valorComDesconto.toFixed(2).replace(".",",")}</span>
                    <span class="valorSem">R$ ${produto.valorSemDesconto.toFixed(2).replace(".",",")}</span>
                    
                </div>

            </div>
        ` 
        let divsCards = document.getElementsByClassName("card")
        for(let card of divsCards){
            card.addEventListener("click,clicou")
        }
        }
}
function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}
buscar()