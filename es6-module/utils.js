function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult as multiplicacao, div, sub };

/*
  metodo principal
  so pode ter um default por arquivo
  pode importar com qualquer nome
  nao precisa utilizar as chaves
*/
export default sum;
