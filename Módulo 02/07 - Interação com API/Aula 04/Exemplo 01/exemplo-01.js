
async function buscar(){
    let resposta = await fetch("mensagem.txt")
    let convertido =  await resposta.text()


//for (let x = 1; x<=3; x++){
let lista = [5,7,9]
for (let x in lista){
    
    document.body.innerHTML +=`
        <h1>
        ${convertido}
        </h1>

        <p>
        ${lista[x]}
        </p>
    `
        alert(x)
    }

}
buscar()