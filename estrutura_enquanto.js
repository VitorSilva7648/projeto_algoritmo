function acaoBotao(){

var nome,idade, limite, contador

limite = prompt("Digite a quantidade de vezes que será verificada a idade:")
contador = 0

while(contador< limite){
    nome = prompt("Digite o nome da pessoa:")
    idade = prompt("Digite a idade da pessoa:")  //prompt("Digite a idade do(a) ",nome, ":") 
    if(idade > 17)
        document.getElementById("paragráfo").innerText = nome+ " você é maior de idade!"
    else
        document.getElementById("paragráfo").innerText = nome+ " você é menor de idade!"
        contador++
}
}