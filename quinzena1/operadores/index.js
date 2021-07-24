/* Exercício de interpretação

1) a. false
b. false
c. true
d. boolean

2) Será impresso a junção dos valores atribuídos nas variáveis. 
Porém, como eles estão solicitando números ao usuário. E a impressão do prompt é sempre string.
O correto é converter para Number.

3) Para isso, teria que receber o valor, converter para ocorrer e posteriormente ocorre a soma dos números.

Exemplo:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let conversaoPrimeiro = Number(primeiroNumero)
let conversaoSegundo = Number(segundoNumero)
const soma = conversaoPrimeiro + conversaoSegundo

console.log(soma)

*/

// Exercício com escrita de código

/* Exercício 1

const idadeUsuario = prompt("Informe sua idade: ")
const idadeBestFriend = prompt("Informe sua idade do seu melhor amigo (a): ")
const idadesComparadas = idadeUsuario > idadeBestFriend
const diferencaIdade = idadeUsuario - idadeBestFriend

console.log("Sua idade é maior do que a do seu melhor amigo (a)? ", idadesComparadas)
console.log("Qual a diferença da sua idade em relação ao do seu melhor (a)? ", diferencaIdade)

*/

/* Exercício 2
Resposta letra a e b:

let numero = prompt("Insira um número par:")
let divisaoNumero = numero / 2
let resultadoDivisao = Number(divisaoNumero)
let restoNumero = numero % 2
let resultadoResto = Number(restoNumero)

console.log("O resto da divisão é: ", resultadoResto)

Resposta letra C: Sim, percebi que o resto é sempre 0.
Resposta letra D: O resto sempre será 1. 
 */


/* Exercício 3

let idade = prompt("Qual sua idade? ")
console.log("Sua idade é:", idade, "anos.")

let idadeMeses = idade * 12
let conversaoIdadeMeses = Number(idadeMeses)

console.log("Sua idade em meses é:", conversaoIdadeMeses)

let idadeDias = idade * 365
let conversaoIdadeDias = Number(idadeDias)

console.log("Sua idade em dias é:", conversaoIdadeDias)

let idadeHoras = conversaoIdadeDias * 24
let conversaoIdadeHoras = idadeHoras

console.log("Sua idade em horas é:", conversaoIdadeHoras) 
*/

/* Exercício 4

let numeroInicial = prompt("Informe um número:")
let numeroFinal = prompt("Digite um número:")

let comparacaoNumero = numeroInicial > numeroFinal
let comparacaoIgual = numeroInicial === numeroFinal
let divisivelPrimeiro = (numeroInicial % numeroFinal) === 0
let divisivelSegundo = (numeroFinal % numeroInicial) === 0

console.log("O primeiro numero é maior que segundo?", comparacaoNumero)
console.log("O primeiro numero é igual ao segundo?", comparacaoIgual)
console.log("O primeiro numero é divisível pelo segundo?", divisivelPrimeiro)
console.log("O segundo numero é divisível pelo primeiro?", divisivelSegundo)
 */



