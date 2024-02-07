async function procurar(){
    let resposta = await fetch("mensagem.txt")
    let convertido = await resposta.text()

    console.log(resposta)
    alert(convertido)
    document.getElementById("t1").textContent = convertido
    document.getElementById("t1").style.color="blue"
    document.getElementById("foto").src="https://img.freepik.com/fotos-gratis/feliz-conceito-de-segunda-feira-com-mulher-sorridente_23-2150037200.jpg?w=996&t=st=1707334357~exp=1707334957~hmac=af9d469a420543763f0348b93b7ad20575580516a4e63651c413a0a685cd61aa"
    document.getElementById("foto").width="650"
}
//procurar()