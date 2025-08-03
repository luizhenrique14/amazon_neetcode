function bubbleSort(lista) {
  let tamanho = lista.length;

  for (let passada = 0; passada < tamanho - 1; passada++) {
    for (let posicao = 0; posicao < tamanho - 1 - passada; posicao++) {
      let elementoAtual = lista[posicao];
      let proximoElemento = lista[posicao + 1];

      if (elementoAtual > proximoElemento) {
        // Troca os elementos de posição
        lista[posicao] = proximoElemento;
        lista[posicao + 1] = elementoAtual;
      }
    }
  }

  return lista;
}

let numeros = [5, 2, 9, 1, 7];
console.log("Ordenado com Bubble Sort:", bubbleSort([...numeros])); // [1, 2, 5, 7, 9]
