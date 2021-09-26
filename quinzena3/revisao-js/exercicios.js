// EXERCÍCIO 01
function inverteArray(array) {
let arrayReverso = []

  for(let i = array.length -1; i >= 0; i--){
    arrayReverso.push(array[i])    
  }
  console.log(arrayReverso)
  return arrayReverso
}
inverteArray(array)

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayParesAoQuadrado = []
  
  for(let numero of array){
    if(numero % 2 === 0){
      let raizQuadrada = numero * numero
      arrayParesAoQuadrado.push(raizQuadrada)
    }
  
  }
  console.log(arrayParesAoQuadrado)
  return arrayParesAoQuadrado
}
retornaNumerosParesElevadosADois(array)

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNumerosPares = []
    
  for(let valor of array){
    if(valor % 2 === 0){
      let numPar = valor
      arrayNumerosPares.push(numPar)
    }
  }
  console.log(arrayNumerosPares)
  return arrayNumerosPares
}
retornaNumerosPares(array)

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numMaior = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] > numMaior){
      numMaior = array[i]
    }
  }
  console.log(numMaior)
  return numMaior
}
retornaMaiorNumero(array)
  
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const imprimeQuantidade = array.length
  console.log(imprimeQuantidade)
  return imprimeQuantidade
}
retornaQuantidadeElementos(array)

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  console.log(respostas)
  return respostas
 }
 retornaExpressoesBooleanas()


// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let array = []
  for(let i = 0; array.length < n; i += 2){
    array.push(i)
  }  
  console.log(array)
  return array
}
retornaNNumerosPares(n)

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if(a === b && a == c && b === c){
    console.log('Equilátero')
    return 'Equilátero'
  }
  else if(a === b || a == c || b === c){
    console.log('Isósceles')
    return 'Isósceles'
  }else{
    console.log('Escaleno')
    return 'Escaleno'    
  }
}
checaTriangulo(a, b, c)

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  if (num1 > num2)   {
    const numeroMaior = Number(num1 > num2)
    const converterNumeroMaior = numeroMaior * num1
    const divisivel = num1 % num2 === 0
    const diferencas = num1 - num2

    return {
      maiorNumero: converterNumeroMaior,
      maiorDivisivelPorMenor: divisivel,
      diferenca: diferencas
    }
  }
  else if(num1 < num2){
    const numeroMaior1 = Number(num1 < num2)
    const converterNumeroMaior1 = numeroMaior1 * num2
    const divisivel1 = num2 % num1 === 0
    const diferencas1 = num2 - num1
  
    return {
      maiorNumero: converterNumeroMaior1,
      maiorDivisivelPorMenor: divisivel1,
      diferenca: diferencas1
    }
  }
  else{
    const numerosIguais = Number(num1 = num2)
    const divisivel2 = num1 % num1 === 0
    const diferencas2 = num2 - num1

    return {
      largura: numerosIguais,
      maiorDivisivelPorMenor: divisivel2,
      diferenca: diferencas2
    }
  }
}
comparaDoisNumeros(num1, num2)
 
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    let newArray = []
    let primeiroNumeroMaior = -Infinity
    let segundoNumeroMaior = -Infinity
    let primeiroNumeroMenor = Infinity
    let segundoNumeroMenor = Infinity
  
    for(let i = 0; i < array.length; i++){
      if(array[i] > primeiroNumeroMaior){
        primeiroNumeroMaior = array[i]
      }
    }
      
    for(let i = 0; i < array.length; i++){
      if(array[i] < primeiroNumeroMenor){
        primeiroNumeroMenor = array[i] 
      }  
    }
      
    for(let i = 0; i < array.length; i++){
      if((array[i] > segundoNumeroMaior) && (array[i] !== primeiroNumeroMaior)){
        segundoNumeroMaior = array[i] 
      } 
    }
    for(let i = 0; i < array.length; i++){
      if((array[i] < segundoNumeroMenor) && (array[i] !== primeiroNumeroMenor)){
        segundoNumeroMenor = array[i] 
      }
    } 
    newArray.push(segundoNumeroMaior)
    newArray.push(segundoNumeroMenor)
    return newArray
  }
segundoMaiorEMenor(array)


// EXERCÍCIO 11
function ordenaArray(array) {
  for(let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}
ordenaArray(array)

// EXERCÍCIO 12
function filmeFavorito() {
  const dadosFilmes = {
  nome: 'O Diabo Veste Prada',
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return dadosFilmes
}
filmeFavorito()


// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const copiaDadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  let modificarAtores = ""
  for (let i = 0; i < copiaDadosFilme.atores.length; i++) {
    if (i === copiaDadosFilme.atores.length - 1) {
      modificarAtores += copiaDadosFilme.atores[i]
    } else {
      modificarAtores += copiaDadosFilme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${copiaDadosFilme.nome}, de ${copiaDadosFilme.ano}, dirigido por ${copiaDadosFilme.diretor} e estrelado por ${modificarAtores}.`
}
imprimeChamada()

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const largura = lado1
  const altura = lado2
  const perimetro = 2*(lado1 + lado2)
  const area = lado1 * lado2
  return {
    largura: largura,
    altura: altura,
    perimetro: perimetro,
    area: area
  }
}
criaRetangulo(lado1, lado2)

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = 'ANÔNIMO'
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }
}
anonimizaPessoa(pessoa)

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let arrayAdultos = []
  for(let i = 0; i < arrayDePessoas.length; i++){
   if(idade >= 18){
      arrayAdultos.push(i)
    }
  }
  return arrayAdultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
