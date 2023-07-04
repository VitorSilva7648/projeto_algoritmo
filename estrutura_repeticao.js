//fatorial de um número

function acaoBotao() {

var numero, fatorial, contador

    numero = prompt("Digite o numero que desaja obter o fatorial:")  
    fatorial = 1
    for(contador=1; contador<=numero; contador++){
        fatorial = fatorial * contador
    }
   document.getElementById("paragráfo").innerText = "O fatorial de " + numero+ " é: "+ fatorial
}