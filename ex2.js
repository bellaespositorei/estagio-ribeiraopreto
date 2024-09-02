const readline = require("readline");

// Configura a entrada e saída padrão para o readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countLetterA(str) {
  // Converte a string para minúsculas para facilitar a contagem
  const lowerCaseStr = str.toLowerCase();
  let count = 0;

  // Itera sobre cada caractere da string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === "a") {
      count++;
    }
  }

  // Retorna o resultado
  if (count > 0) {
    console.log(`A letra 'a' ocorre ${count} vez(es) nesta palavra/frase.`);
  } else {
    console.log("A letra 'a' não foi encontrada nesta palavra/frase.");
  }
}

// Pergunta ao usuário
rl.question("Digite uma palavra ou frase: ", (input) => {
  countLetterA(input);

  // Fecha a interface de leitura
  rl.close();
});

//Para executar o código, só colocar o seguinte no seu console: node ex2.js
