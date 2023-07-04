function acaoBotao(){

    var sair, valor1, valor2, resultado
    
    do{
        valor1 = prompt("Digite um valor:")
        valor2 = prompt("Digite outro valor:")
        document.getElementById("paragráfo").innerText = " A soma é: "+ (parseInt(valor1) + parseInt(valor2))
        sair = prompt("Sair: S/N:")

    }while (sair == "N")
      
}