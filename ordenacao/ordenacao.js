//#teste
const vetorOriginal = [8, 3, 5, 1, 9, 6, 2, 7, 4];

//bubblesort
function bubbleSort(array) {
  const arr = [...array];          //preserva original
  let comparacoes = 0;
  let trocas = 0;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      comparacoes++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocas++;
      }
    }
  }

  return { ordenado: arr, comparacoes, trocas };
}

//selectionsort
function selectionSort(array) {
  const arr = [...array];
  let comparacoes = 0;
  let trocas = 0;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let indiceMinimo = i;

    for (let j = i + 1; j < n; j++) {
      comparacoes++;
      if (arr[j] < arr[indiceMinimo]) {
        indiceMinimo = j;
      }
    }

    if (indiceMinimo !== i) {
      [arr[i], arr[indiceMinimo]] = [arr[indiceMinimo], arr[i]];
      trocas++;
    }
  }

  return { ordenado: arr, comparacoes, trocas };
}

//insertionsort
function insertionSort(array) {
  const arr = [...array];
  let comparacoes = 0;
  let movimentacoes = 0;
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const chave = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > chave) {
      comparacoes++;
      arr[j + 1] = arr[j];   // deslocamento
      movimentacoes++;
      j--;
    }

    // conta a comparação que reprovou no while (quando ainda há elemento à esquerda)
    if (j >= 0) comparacoes++;

    arr[j + 1] = chave;      // inserção da chave na posição correta
    movimentacoes++;
  }

  return { ordenado: arr, comparacoes, movimentacoes };
}

//print
function exibirResultado(nome, original, resultado) {
  console.log(`Algoritmo: ${nome}`);
  console.log(`\nOriginal:\n[${original.join(", ")}]`);
  console.log(`\nOrdenado:\n[${resultado.ordenado.join(", ")}]`);
  console.log(`\nComparações: ${resultado.comparacoes}`);
  console.log(
    `Trocas/Movimentações: ${resultado.trocas ?? resultado.movimentacoes}`
  );
  console.log("\n" + "=".repeat(45) + "\n");
}

//execute
const resultadoBubble = bubbleSort(vetorOriginal);
const resultadoSelection = selectionSort(vetorOriginal);
const resultadoInsertion = insertionSort(vetorOriginal);

exibirResultado("Bubble Sort", vetorOriginal, resultadoBubble);
exibirResultado("Selection Sort", vetorOriginal, resultadoSelection);
exibirResultado("Insertion Sort", vetorOriginal, resultadoInsertion);

console.log("Tabela Comparativa");
console.log("+-----------------+-------------+-----------------------+");
console.log("| Algoritmo       | Comparações | Trocas/Movimentações  |");
console.log("+-----------------+-------------+-----------------------+");
console.log(
  `| ${"Bubble Sort".padEnd(15)} | ${String(resultadoBubble.comparacoes).padStart(11)} | ${String(resultadoBubble.trocas).padStart(21)} |`
);
console.log(
  `| ${"Selection Sort".padEnd(15)} | ${String(resultadoSelection.comparacoes).padStart(11)} | ${String(resultadoSelection.trocas).padStart(21)} |`
);
console.log(
  `| ${"Insertion Sort".padEnd(15)} | ${String(resultadoInsertion.comparacoes).padStart(11)} | ${String(resultadoInsertion.movimentacoes).padStart(21)} |`
);
console.log("+-----------------+-------------+-----------------------+");