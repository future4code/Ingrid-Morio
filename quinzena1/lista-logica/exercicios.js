// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const altura = prompt("Informe a altura:")
const largura= prompt("Informe a largura:")

console.log(altura * largura)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
let anoAtual = prompt("Insira o ano atual:")
let anoNascimento = prompt("Insira o seu ano de nascimento:")
const idade = anoAtual - anoNascimento

console.log(idade)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
let peso = prompt("Informe o seu peso em Kg:")
let alturaCorporal = prompt("Informe sua altura em metros:")
let conversaoPeso = Number(peso)
let conversaoAlturaCorporal = Number(alturaCorporal)
let calculoIMC = conversaoPeso / (conversaoAlturaCorporal * conversaoAlturaCorporal)

console.log(calculoIMC)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
let nome = prompt("Digite seu nome:")
let informeIdade = prompt("Digite sua idade:")
let email = prompt("Digite seu e-mail:")

let conversaoIdade = Number(informeIdade)

const resultado = nome.concat(conversaoIdade, email)

console.log('Meu nome é '+ nome + ', tenho' + ' ' + conversaoIdade + ' ' + 'anos, e o meu email é' + ' ' + email + '.')  

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let primeiraCor = prompt("Digite a sua primeira cor favorita:")
  let segundaCor = prompt("Digite a sua segunda cor favorita:")
  let terceiraCor = prompt("Digite a sua terceira cor favorita:")
  
  let coresFavoritas = [primeiraCor, segundaCor, terceiraCor]
  
  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let texto = prompt("Digite uma palavra:")

  console.log(texto.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custoEspetaculo = prompt("Informe o custo de um espetáculo de teatro:")
  let valorIngresso = prompt("Informe o valor do ingresso:")
  
  let vendasIngresso = Number(custoEspetaculo / valorIngresso)
  
  console.log(vendasIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let dadosInicial = prompt("Insira uma palavra:")
  let dadosFinal = prompt("Insira outra palavra:")
  
  let tamanhoDadosInicial = dadosInicial.length
  let tamanhoDadosFinal = dadosFinal.length
  
  let comparacaoTamanho = tamanhoDadosInicial === tamanhoDadosFinal
  
  console.log(comparacaoTamanho)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavraInicial = prompt("Insira uma palavra:")
  let palavraFinal = prompt("Insira outra palavra:")

  let comparacaoPalavraInicial= (palavraInicial.toUpperCase())
  let comparacaoPalavraFinal= (palavraFinal.toUpperCase())

  let resultadoComparacao = comparacaoPalavraInicial === comparacaoPalavraFinal

  console.log(resultadoComparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoPresente = prompt("Digite o ano atual:")
  let anoDeNascimento = prompt("Informe o ano de nascimento:")
  let emissaoAnoIdentidade = prompt("Informe o ano de emissão da sua carteira de identidade:")
  
  let idadeUsuario = Number(anoPresente - anoDeNascimento)
  let renovacaoIdentidade = Number(anoPresente - emissaoAnoIdentidade)
  
  let criterio1 = idadeUsuario <=20 && renovacaoIdentidade >= 5
  let criterio2 = (idadeUsuario > 20) && (idadeUsuario <= 50) && renovacaoIdentidade >= 10
  let criterio3 = idadeUsuario > 50 && renovacaoIdentidade >= 15
   
  let condicaoRenovacao = criterio1 || criterio2 || criterio3
  
  console.log (condicaoRenovacao)
  }

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
let informeAno = Number (prompt("Insira um ano:"))

let verificarAno = (informeAno % 4) == 0 == (informeAno % 100) > 0
let verificarAno1 = (informeAno % 100) == 0 && (informeAno % 100) >= 1 
let verificarAno2 = (informeAno % 400) == 0

let confirmacaoAno = verificarAno || verificarAno1 || verificarAno2

console.log(confirmacaoAno)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

let maiorIdade = prompt("Você tem mais de 18 anos?")
let escolaridade = prompt("Você possui ensino médio completo?")
let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

let transformaIdade = maiorIdade.toLocaleLowerCase() 
let transformaEscolaridade = escolaridade.toLocaleLowerCase() 
let transformaHorario = horario.toLocaleLowerCase() 

let verificarMaiorIdade = (transformaIdade === "sim")
let verificarEscolaridade = (transformaEscolaridade === "sim")
let verificarHorario = (transformaHorario === "sim")

let finalizarCadastro = verificarMaiorIdade && verificarEscolaridade && verificarHorario

console.log(finalizarCadastro)

}