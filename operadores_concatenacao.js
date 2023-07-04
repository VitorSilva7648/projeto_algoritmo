/*
Var
// Seção de Declarações das variáveis
   nome: caracter
   numero: real
   
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite um nome!")
   leia(nome)
   escreval("Digite um numero!")
   leia(numero)

   escreval(nome, ":", numero)
*/

var nome, numero
   
nome = prompt("Digite um nome:")
numero = prompt("Digite um numero:")

document.getElementById("paragráfo").innerText = nome + ": " + numero