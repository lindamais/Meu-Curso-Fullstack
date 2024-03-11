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
                <h3>${produto.nome}</h3>
                <p>${produto.descrição}</p>
            </div> 
            `   
            
            
    }
}
buscar()