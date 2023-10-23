var produto;
var resultado;

function verificar(event) {
    event.preventDefault();

    produto = document.getElementById('produto').value;
    resultado = document.getElementById('resultado');

    let estoque = ['carro', 'bike', 'moto'];

    if (estoque.indexOf(produto) !== -1) {
        
        resultado.innerHTML = produto + ' existe no seu estoque ' ;
    } else {
        
        resultado.innerHTML = produto + ' Esse produto não existe: ' ;
    }
}
