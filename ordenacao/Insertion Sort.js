function insertionSort(lista) {
  for (let indiceAtual = 1; indiceAtual < lista.length; indiceAtual++) {
    let valorInserido = lista[indiceAtual];
    let indiceAnterior = indiceAtual - 1;

    // Move os elementos maiores para a direita
    while (indiceAnterior >= 0 && lista[indiceAnterior] > valorInserido) {
      lista[indiceAnterior + 1] = lista[indiceAnterior];
      indiceAnterior--;
    }

    // Coloca o valor no local correto
    lista[indiceAnterior + 1] = valorInserido;
  }

  return lista;
}

let numeros = [8, 4, 6, 2, 9];
console.log("Ordenado:", insertionSort([...numeros])); // [2, 4, 6, 8, 9]
