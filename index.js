console.log("Desafio Target")

console.log("Exercício 1")

// Declaração das variaveis
let INDICE = 13;
let SOMA = 0;
let K = 0;

//Construção do loop 
while (K < INDICE) {
K = K + 1;
SOMA = SOMA + K;
}

console.log("O resultado da Soma é: "+ SOMA);

/* O valor da variável SOMA será 91. Isso ocorre porque o loop while está adicionando os números de 1 a 13 à variável SOMA. A soma dos números de 1 a 13 é igual a 91.
*/
console.log("-------------------------------------------------")

console.log("Exercício 2")

function fibonacci(n) {
  let a = 0;
  let b = 1;

  while (b <= n) {
    if (b === n) {
      return true;
    }
    const temp = b;
    b = a + b;
    a = temp;
  }
  return false;
}

const numeroInformado = 42; // número que queremos verificar se pertence à sequência
const pertence = fibonacci(numeroInformado);

if (pertence) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}


console.log("------------------------------------------------------")

console.log("Exercício 3")

console.log("letra a")
console.log("A lógica é adicionar 2 ao número anterior. O próximo número é 9, sendo ela uma progressão aritmética")

console.log("letra b")
console.log("A lógica é multiplicar cada número anterior por 2. O próximo número é 128, sendo ela uma progressão geométrica de razão igual a 2.")

console.log("letra c")
console.log("A lógica é elevar a posição do número anterior ao quadrado. O próximo número é 49.")

console.log("letra d")
console.log("A lógica é multiplicar a posição do número que queremos descobrir por 2 e elevar o resultado ao quadrado. O próximo número será 100.")

console.log("letra e")
console.log("A lógica é somar os dois números anteriores. O próximo número será 13, sendo ela uma sequência de Fibonacci.")

console.log("letra f")
console.log("A lógica é adicionar, a partir do quarto número, 1 ao número anterior. O próximo número será 20")

console.log("Exercício 4")
console.log("O carro e o caminhão estão à mesma distância de Ribeirão Preto e para se cruzarem, eles irão se encontrar à 60,9 km de Ribeirão Preto. Dessa forma, não há diferença na distancia de ambos em relação à Ribeirão Preto.")

console.log("Exercício 5")

let string = "lista"; // string a ser invertida
let novaString = ""; // string vazia para armazenar a nova string invertida

for (let i = string.length - 1; i >= 0; i--) { // loop começando da última posição da string
  novaString += string[i]; // adiciona cada caractere na ordem inversa na nova string
}

console.log(novaString); // exibe a nova string invertida
