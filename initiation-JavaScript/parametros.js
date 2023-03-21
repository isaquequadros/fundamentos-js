function nomeEaIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeEaIdade("André", 19))

function somar(number1, number2) {
  return number1 + number2;
}

console.log(somar(1, 1)) //2

function multiplicar(num1 = 1, num2 = 1) {
  return num1 * num2;
}

//10
console.log(multiplicar(somar(5, 5)))