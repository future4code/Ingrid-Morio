//Exercício de interpretação de código 1 A

// irá imprimir os dados em 3 arrays, com contendo o respectivo nome e apelido.

//Exercício de interpretação de código 2 A

// irá imprimir todos os nome de cada pessoa, dentro de um array.

//Exercício de interpretação de código 3 A

// irá imprimir somente os os apelidos "Mandi" e "Laura", dentro de um array.

//Exercício de escrita 1- A

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// function selecionarNomes(dados){
//   return dados.nome
// }

// for (const informacao of pets) {
//   console.log(selecionarNomes(informacao))
  
// }


//Exercício de escrita 1- B

// const novoArray = pets.filter((item, index, array) => {
//   return item.raca === "Salsicha"

// })

// console.log(novoArray)

//Exercício de escrita 1- C

// function buscarPoodle(cachorro){
// if(cachorro.raca == "Poodle")

//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`
// }

// const selecionarPoodle = pets
//    .filter(buscarPoodle)
//    .map(buscarPoodle)
//    console.log(selecionarPoodle)

//Exercício de escrita 2-A

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

  
// function selecionarNomes(dados){
//   return dados.nome
// }

// for (const nomesProdutos of produtos) {
//   console.log(selecionarNomes(nomesProdutos))
  
// }

//Exercício de escrita 2-B não consegui



//Exercício de escrita 2-C


// const buscarNomes = produtos.filter((item, index, array) => {

//  return item.categoria === "Bebidas"
 
//  })

// console.log(buscarNomes)

//Exercício de escrita 2-D


// const buscarNomesYpe = produtos.filter(p => p.nome.includes("Ypê"))

// console.log(buscarNomesYpe)


//Exercício de escrita 2-E não consegui






