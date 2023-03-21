function mostrar(nome) {
  return `meu nome é ${nome}`;
}

const mostrarArrow = nome => `meu nome é ${nome}`;
const somar = (numero1, numero2) => numero1 + numero2;

const somarNumeros = (numero1, numero2) => {
  if (numero1 || numero2 > 10) {
    return "Apenas números de 1 a 9"
  } else {
    return num1 + num2;
  }
}