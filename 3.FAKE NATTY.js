// Criação de interface para leitura de dados
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Declaração da variável de entrada

let entrada = [];

// Bloco de leitura de entradas
rl.on('line', (line) => {
  entrada.push(line.trim());

// Evento para iniciar o processamento das entradas
}).on('close', () => {
// --------------------
  let array = 0;
  while (true) {
    if (array >= entrada.length) {
      break;
    }
    const [G, P] = entrada[array].split(' ').map(Number);
    array++; 

// verificação de condição de término do loop
    if (G === 0 && P === 0) break;
  // Processamento das corridas
    let corridas = [];
    for (let i = 0; i < G; i++) {
      corridas.push(entrada[array++].split(' ').map(Number));
    }

  // Definição do número de sistemas de pontuação
    const S = Number(entrada[array++]);

  // Processamento dos sistemas de pontuação  
    console.log("------")
    for (let s = 0; s < S; s++) {
      const sistemaDePontuacao = entrada[array++].split(' ').map(Number).slice(1);
      const pontos = Array(P).fill(0);
      
      // Calculo das pontuações das corridas
      for (const race of corridas) {
        for (let i = 0; i < race.length; i++) {
          const posicao = race[i];
          if (posicao - 1 < sistemaDePontuacao.length) {
            pontos[i] += sistemaDePontuacao[posicao - 1];
          }
        }
      }

      // Identificação dos campeões 
      const pontuacaoFinal = Math.max(...pontos);
      const campeoes = pontos.map((score, i) => score === pontuacaoFinal ? i + 1 : null).filter(x => x !== null);

      //Saída dos campeões
      console.log(campeoes.join(' '));
    }
  }
});
