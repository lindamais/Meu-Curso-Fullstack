
async function obter(){
    let resposta = await fetch("mensage.txt")
    let convertido =  await resposta.text()
    console.log(convertido)
}
obter()

