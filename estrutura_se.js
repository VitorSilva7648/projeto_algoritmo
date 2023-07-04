function acaoBotao() {

    var numero1, numero2, resultado, operacao

    numero1= prompt("Digite o primeiro numero da operação:")
    operacao = prompt("Digite uma operação: Ex.:(+, -, *, /)")
    numero2 = prompt("Digite o segundo numero da operação:")
          
    if(operacao == "+"){
        resultado = parseInt(numero1) + parseInt(numero2)
    }else if(operacao == "-"){                
        resultado = parseInt(numero1) - parseInt(numero2)
    }else if(operacao == "*" ){
        resultado = parseInt(numero1) * parseInt(numero2)
    }else if(operacao == "/"){
        resultado = parseInt(numero1) / parseInt(numero2)
    }
    document.getElementById("paragráfo").innerText = resultado
    
}
