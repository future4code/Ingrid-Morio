```javascript
function calculaNota(ex, p1, p2) {
  let notasComPeso = (ex * 1 + p1 * 2 + p2 * 3) / 6
  if(notasComPeso >= 9){
    return "A"
  }
  else if(notasComPeso >= 7.5 && notasComPeso <=9){
    return "B"
  }
  else if(notasComPeso <= 7.5 && notasComPeso >= 6){
    return "C"
  }else{
    return "D"
  }
}
```