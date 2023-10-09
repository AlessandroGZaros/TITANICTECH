



const adicionar = document.getElementsByClassName("comprar")
for (var i = 0;i < adicionar.length;i++){
    adicionar[i].addEventListener("click", adicionarProdutoCarrinho)
    
}

function adicionarProdutoCarrinho(event){
    const button = event.target
    alert("Voce clicou")
}
