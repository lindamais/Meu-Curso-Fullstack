

async function obter(){
    let resposta = await fetch("")
    let convertido =  await resposta.text()
    console.log(convertido)
 }
 obter()