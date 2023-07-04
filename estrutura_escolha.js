function acaoBotao() {

    var numero1, numero2, resultado, operacao

    numero1= prompt("Digite o primeiro numero da operação:")
    operacao = prompt("Digite uma operação: Ex.:(+, -, *, /)")
    numero2 = prompt("Digite o segundo numero da operação:")
    
    switch (operacao) {
        case "+":
            resultado = parseInt(numero1) + parseInt(numero2)
            break;
        case "-":
            resultado = parseInt(numero1) - parseInt(numero2)
            break;
        case "*":
            resultado = parseInt(numero1) * parseInt(numero2)
                break;
        case "/":
            resultado = parseInt(numero1) / parseInt(numero2)
            break;
        default:
            prompt("A operação não é valida!")
        break;
    }
    document.getElementById("paragráfo").innerText = resultado
    
}