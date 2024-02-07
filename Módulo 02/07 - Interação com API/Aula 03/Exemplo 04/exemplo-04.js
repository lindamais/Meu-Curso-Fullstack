async function obter(){
    let resposta = await fetch("curso.txt")
    let convertido =  await resposta.text()
      console.log(convertido)
 }
 obter()