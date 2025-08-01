// Nó da fila (valor + ponteiro para o próximo)
class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class Fila {
  constructor() {
    this.inicio = null;   // Ponteiro para o início (primeiro elemento)
    this.fim = null;      // Ponteiro para o fim (último elemento)
    this.tamanho = 0;     // Contador de elementos
  }

  // Adiciona um elemento no fim da fila
  enqueue(valor) {
    const novoNo = new Node(valor);

    if (this.isEmpty()) {
      this.inicio = novoNo;
      this.fim = novoNo;
    } else {
      this.fim.proximo = novoNo;
      this.fim = novoNo;
    }

    this.tamanho++;
  }

  // Remove o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) return null;

    const removido = this.inicio;
    this.inicio = this.inicio.proximo;
    if (!this.inicio) {
      this.fim = null; // Fila ficou vazia
    }

    this.tamanho--;
    return removido.valor;
  }

  // Retorna o valor do início da fila sem remover
  peek() {
    return this.inicio ? this.inicio.valor : null;
  }

  // Retorna true se a fila estiver vazia
  isEmpty() {
    return this.tamanho === 0;
  }

  // Retorna o número de elementos da fila
  size() {
    return this.tamanho;
  }

  // Esvazia a fila
  clear() {
    this.inicio = null;
    this.fim = null;
    this.tamanho = 0;
  }

  // Mostra todos os elementos da fila
  exibir() {
    let atual = this.inicio;
    const valores = [];
    while (atual) {
      valores.push(atual.valor);
      atual = atual.proximo;
    }
    console.log("Início -> " + valores.join(" -> ") + " <- Fim");
  }
}

// ---------------------- Testando ----------------------

const fila = new Fila();

fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");

fila.exibir(); // Início -> A -> B -> C <- Fim

console.log("peek:", fila.peek());    // A
console.log("dequeue:", fila.dequeue()); // A
fila.exibir(); // Início -> B -> C <- Fim

console.log("Tamanho:", fila.size());       // 2
console.log("Está vazia?", fila.isEmpty()); // false

fila.clear();
fila.exibir(); // Início ->  <- Fim
console.log("Está vazia agora?", fila.isEmpty()); // true
