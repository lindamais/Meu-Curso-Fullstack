//Função assíncrona para fazer uso do Await
async function buscarTreinando(){
    //await para a execução do programa aguardando
    //o resultado do comando Fetch().
        let procura = await fetch("lista-produtos.json")
        let produtos = await procura.json()

        let parametros = new URLSearchParams (window.location.search)
        let parametroID = parametros.get("produto-id")

        let id
        for(let x in produtos){
            if (produtos[x]).id==parametroID{
                id=x
            } 

        }    
            document.body.innerHTML += `

                <h1>${produtos[id].nome}</h1>
                <img src="${produtos[id].img}" width="160" height="260" </h3>    
                <p>${produtos[id].descrição}</p>
                    <span>R$ ${produto[id].valorComDesconto.toFixed(2).replace(".",",")}</span>
                    <span>R$ ${produto[id].valorSemDesconto.toFixed(2).replace(".",",")}</span>
                    
                </div>

            </div>
        `     
              
            
            
    }

buscarTreinando()