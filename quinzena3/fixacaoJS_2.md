```javascript

function calculaPrecoTotal(quantidade) {

  if(quantidade < 12){
    let menosDeUmaduzia = 1.30
    let calculoMenosDeUmaDuzia = quantidade * menosDeUmaduzia
    console.log(calculoMenosDeUmaDuzia)
    return calculoMenosDeUmaDuzia
  } else{
      let umaDuziaOuMais = 1.00
      let calculoUmaDuziaOuMais = quantidade * umaDuziaOuMais
      console.log(calculoUmaDuziaOuMais)
      return calculoUmaDuziaOuMais
    }
}

```
