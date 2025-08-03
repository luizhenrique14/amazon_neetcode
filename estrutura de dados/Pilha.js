// Classe Pilha usando lista encadeada
class Node {
  constructor(valor) {
    this.valor = valor;      // Valor armazenado no nó
    this.proximo = null;     // Referência para o próximo nó
  }
}

class Pilha {
  constructor() {
    this.topo = null;        // Topo da pilha (último elemento inserido)
    this.tamanho = 0;        // Contador de elementos
  }

  // Insere um novo elemento no topo da pilha
  push(valor) {
    const novoNo = new Node(valor);
    novoNo.proximo = this.topo; // O novo nó aponta para o antigo topo
    this.topo = novoNo;         // Atualiza o topo
    this.tamanho++;
  }

  // Remove o elemento do topo da pilha e o retorna
  pop() {
    if (this.isEmpty()) return null;

    const removido = this.topo;
    this.topo = this.topo.proximo; // Topo passa a ser o próximo nó
    this.tamanho--;
    return removido.valor;
  }

  // Retorna o valor do topo sem remover
  peek() {
    return this.topo ? this.topo.valor : null;
  }

  // Retorna true se a pilha estiver vazia
  isEmpty() {
    return this.tamanho === 0;
  }

  // Retorna o número de elementos na pilha
  size() {
    return this.tamanho;
  }

  // Esvazia a pilha
  clear() {
    this.topo = null;
    this.tamanho = 0;
  }

  // Mostra a pilha inteira (do topo até a base)
  exibir() {
    let atual = this.topo;
    const valores = [];
    while (atual) {
      valores.push(atual.valor);
      atual = atual.proximo;
    }
    console.log("Topo -> " + valores.join(" -> "));
  }
}

// ---------------------- Testando ----------------------

const pilha = new Pilha();

pilha.push("A");
pilha.push("B");
pilha.push("C");

pilha.exibir(); // Topo -> C -> B -> A

console.log("peek:", pilha.peek()); // C
console.log("pop:", pilha.pop());   // C
pilha.exibir(); // Topo -> B -> A

console.log("Tamanho:", pilha.size());      // 2
console.log("Está vazia?", pilha.isEmpty()); // false

pilha.clear();
pilha.exibir(); // Pilha vazia
console.log("Está vazia agora?", pilha.isEmpty()); // true
