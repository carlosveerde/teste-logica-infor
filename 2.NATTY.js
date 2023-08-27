// Loop que itera de 0 a 40
for (let i = 0; i <= 40; i++) {
  // Definição de uma função chamada 'fibonacci' que calcula o n-ésimo termo da sequência de Fibonacci
  function fibonacci(i) {
    // Caso base: quando i é 0 ou 1, retorna i
    if (i <= 1) {
      return i;
    } else {
      // Caso geral: retorna a soma dos dois termos anteriores da sequência
      return fibonacci(i - 1) + fibonacci(i - 2);
    }
  }
  
  // Chama a função 'fibonacci' com o valor atual de 'i' e imprime o resultado
  console.log(fibonacci(i));
}