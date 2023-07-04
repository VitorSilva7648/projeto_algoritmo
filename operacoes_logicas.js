var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a primeira nota do aluno")
nota2 = prompt("Digite a segunda nota do aluno")   

media = (parseInt(nota1) + parseInt(nota2))/ 2;

if(media >=6)
    passou = true;

if(passou && (media >=7 && media<=9))
    alert("Aprovado!" + nome)
else
alert("Reprovado!" + nome)



