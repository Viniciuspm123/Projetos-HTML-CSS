let preco = parseFloat(prompt("Digite o preço do produto : "))
let desconto = parseFloat(prompt("Digite o desconto do produto : "))
let novoValor = preco-(desconto/100*preco)
alert("O novo preço corresponde a : "+novoValor)
if(novoValor>90){
    alert("Compra pode ser dividida em 3 vezes")
}