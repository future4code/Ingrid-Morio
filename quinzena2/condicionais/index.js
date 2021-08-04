//Exercício de interpretação 1
//a) O Código solicita ao usuário para inserir um número, onde cria uma outra variável para receber o dado que foi 
//digitado e transformar em número. O teste verifica se o número é par.

//b) Números pares.

//c) Números ímpares.

//Exercício de interpretação 2

//a) Para verificar qual a fruta e o seu respectivo valor.

//b) O preço da fruta Maçã é de R$ 2.25.

//c) O preço da fruta Pêra é de R$ 5.5.

//Exercício de interpretação 3

//a) Está pedindo para o usuário digitar um número, e está transformando a string em um Number.

//b) Se ele digitar 10, vai responder: Essa mensagem é secreta!!! Porém se ele digitar -10, o console não vai imprimir nada.

//c) Sim, no bloco if(numero > 0).


//Exercício 1 

// function podeDirigir(idade){
//     if (idade >= 18){
//     console.log("Você pode dirigir!")
//     }else if (idade < 18){
//     console.log("Você não pode dirigir!")
//     }else{
//     console.log("Digite um número válido!")
//     }
//     }
    
//     const pergunta = Number(prompt("Qual sua idade?"))
//     const resposta = parseFloat(pergunta)
    
//     podeDirigir(resposta)
    
    
    //Exercício 2
    
    // function turno(periodo){
    // if (periodo === 'M'){
    // console.log("Bom dia!")
    // }else if(periodo === 'V'){
    // console.log("Boa tarde!")
    // }else if(periodo === 'N'){
    // console.log("Boa noite!")
    // }else{
    // console.log("Digite o período, conforme solicitado no enunciado")
    // }
    
    // }
    
    // const dados = prompt("Indique o turno que você estuda, sendo: M para Matutino, V para Vespertino e N para Noturno").trim()
    // const mudarFonte = dados.toUpperCase()
    
    // turno(mudarFonte)
    
    //Exercício 3
    
    // function periodoAula(turno){
    // switch (turno){
    //  case "M":
    //   console.log("Bom dia!")
    //   break
    // case "V":
    //   console.log("Boa tarde!")
    //   break
    // case "N":
    //   console.log("Boa noite!")
    //   break
    // default:
    // console.log("Digite o período, conforme solicitado no enunciado")
    
    // }
    // }
    
    // const informacao = prompt("Indique o turno que você estuda, sendo: M para Matutino, V para Vespertino e N para Noturno").toUpperCase()
    
    // periodoAula(informacao)

//Exercício 4

// function generoFilme(filme, ingresso, resposta){
// if (filme == 'fantasia' && ingresso < 15 && resposta == 'sim'){
// console.log('Bom filme!')
// }else{
//     console.log('Escolha outro filme :(')
// }
// }

// const perguntaFilme = prompt("Digite o gênero de filme, que você quer assistir:").trim()
// const alterarMinusculoFilme = perguntaFilme.toLowerCase()
// const perguntaIngresso = Number(prompt("Digite o valor do ingresso, que esteja dentro do seu orçamento:"))
// const perguntaFinal = prompt("Você deseja assistir o filme?").trim()
// const alterarMinusculaFinal = perguntaFinal.toLowerCase()

// generoFilme(alterarMinusculoFilme, perguntaIngresso, alterarMinusculaFinal)

//DESAFIO 1

// function generoFilme(filme, ingresso, lanchinho){
// if (filme == 'fantasia' && ingresso < 15){
// console.log('Bom filme!')
// console.log(`Aproveite o seu ${lanchinho}`)
// }else{
//     console.log('Escolha outro filme :(')
// }
// }

// const perguntaFilme = prompt("Digite o gênero de filme, que você quer assistir:").trim()
// const fonteMinusculaFilme = perguntaFilme.toLowerCase()
// const perguntaIngresso = Number(prompt("Digite o valor do ingresso, que esteja dentro do seu orçamento:"))
// const perguntaSnack = prompt("Qual snack você quer comprar?").trim()
// const fonteMinusculaSnack = perguntaSnack.toLowerCase()

// generoFilme(fonteMinusculaFilme, perguntaIngresso, fonteMinusculaSnack)


