// Loop que vai de 1 a 50
for (let i = 1; i <= 50; i++) {
  // Verifica se i é divisível por 3 e 5 ao mesmo tempo
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz"); // Caso seja verdade imprime "FizzBuzz"
  } 
  // Verifica se i é divisível somente por 3
  else if (i % 3 == 0){
    console.log("Fizz"); // Caso seja verdade imprime "Fizz"
  }
  // Verifica se i é divisível somente por 5
  else if (i % 5 == 0) {
    console.log("Buzz"); /// Caso seja verdade imprime "Buzz"
  } 
  // Se não for divisível por 3 nem por 5, imprime o próprio número
  else {
    console.log(i);
  }
}