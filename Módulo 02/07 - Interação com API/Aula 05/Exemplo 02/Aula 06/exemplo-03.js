async function loja(){
    let busca = await fetch("celulares.json")
    let celulares = await busca.json()


        for(let celular of celulares){

         document.body.innerHTML += `
            <p> O modelo do celular é ${celular.modelo}</p>
            <p> A marca do celular é ${celular.marca}</p>
            <p>  O Sistema Operacional do celular é ${celular.SistemaOperacional}</p>
            <p> A cor do celular é ${celular.cor}</p>
            <p style="background: blue; height:3px;"></p>

        `
            
   }
    
}
loja()
    
