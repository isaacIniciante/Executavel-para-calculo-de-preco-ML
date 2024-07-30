function ver() {
    document.getElementById('valorSug').innerHTML = '';
    
    var custo = parseFloat(document.getElementById('custoProduto').value);
    var porcentagemDesejada = parseFloat(document.getElementById('porcentagemDesejada').value);
    var tarifaFixaPercentual = parseFloat(document.getElementById('tarifaFixa').value);
    var custoFixo = parseFloat(document.getElementById('custoFixo').value);

    if(!custo || !porcentagemDesejada || !tarifaFixaPercentual || !custoFixo){
        document.getElementById('valorSug').innerHTML = `<h3>Preencha todos os campos</h3>`;
        return;
    }
    
    // Calculando o custo total por unidade
    var custoTotal = custo + custoFixo;
    
    // Calculando o preço de venda sugerido com base na porcentagem desejada de lucro sobre o custo
    var precoVenda = custoTotal * (1 + (porcentagemDesejada / 100));
    
    // Calculando a tarifa fixa em valor monetário
    var tarifaFixaValor = precoVenda * (tarifaFixaPercentual / 100);
    
    // Calculando o preço de venda final (preço de venda sugerido + tarifa fixa em valor monetário)
    var precoVendaFinal = precoVenda + tarifaFixaValor;
    
    // Exibindo o resultado na página
    document.getElementById('valorSug').innerHTML = `<h3>Valor de venda sugerido <br>R$ ${precoVendaFinal.toFixed(2)} para ganhar ${porcentagemDesejada}% em cima do custo</h3>`;
}

function limpar() {
    window.location.reload();
}
