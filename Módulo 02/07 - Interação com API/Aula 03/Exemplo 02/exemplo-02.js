async function obter (){
    let resposta = await fetch("cardapio.txt")
    let convertido = await resposta.txt()
    console.log(convertido)

}
obter()