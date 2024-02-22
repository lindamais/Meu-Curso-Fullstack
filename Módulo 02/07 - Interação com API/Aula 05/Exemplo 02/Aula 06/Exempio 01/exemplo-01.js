async function concessionária(){
    let resultado = await fetch("carros.json")
    let carros = await resultado.json()

   // alert(carros.marca)

   // alert("A marca é " + carros.marca + ", O modelo é " + carros.modelo + ", O ano é " + carros.ano + " E a cor é " + carros.cor)

  // alert(carros[1].modelo)

  for(let x in carros){
    document.body.innerHTML = `
    <p> A marca do carro é ${carros[1].marca}</p>
    <p> A modelo do carro é ${carros[1].modelo}</p>
    <p> O ano do carro é ${carros[1].ano}</p>
    <p> A cor do carro é ${carros[1].cor}</p>

    `   
}



}
concessionária()