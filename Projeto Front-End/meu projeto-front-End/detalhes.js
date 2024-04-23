async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")
    let indiceProd
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indiceProd = x
        }
    }
 
    document.getElementById("detalhes").innerHTML += `
        <h3>${produtos[indiceProd].nome}</h3>
        <img class:"imagem" src="${produtos[indiceProd].img[0]}" id="frame" width="290" height="290" style="border: 4px solid #f0064c; border-radius: 50%";>
        <div class="miniaturas" id="miniaturas">
        </div>
        <p>${produtos[indiceProd].produto}</p>
        <span>${produtos[indiceProd].sabor}</span>
        <span>R$ ${produtos[indiceProd].preco_unitario.toFixed(2).replace(".",",")}</span>
        `




        document.getElementById("informaçoes").innerHTML += `
        <h1>${produtos[indiceProd].descrição}</h1>`




    let divMiniaturas = document.getElementById("miniaturas")
    for(let y of produtos[indiceProd].img){
        divMiniaturas.innerHTML += `
            <img src="${y}" class="mini">
        `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let a of minizinhas){
        a.addEventListener("mouseover", deslize)
    }
}

function deslize(){
    document.getElementById("frame").src = this.src
}

var shoppingCart = [];

function addToCart(title, price) {
    var product = {};
    product.title = title;
    product.price = price;
    
    shoppingCart.push(product);
}


addToCart("Camiseta", 29.99);
addToCart("Calça jeans", 49.99);



console.log(shoppingCart);

buscarDetalhes()

function compraconcluida(){
    alert ("compra concluída")
function compras(){
    alert ("compras")

    }
}