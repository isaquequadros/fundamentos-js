//imprime texto
let a = "texto para testar esta função"
function imprimeTexto(texto = required()) {
  return texto;
}
console.log(imprimeTexto("Olá, seja bem-vindo"))

//somar
function soma(a = required(), b = required()) {
  return a + b;
}

console.log(soma(1, 2)); // 3

//dividir
function dividir(c = required(), d = required()) {
  return c / d;
}

console.log(dividir(8, 2)); // 4