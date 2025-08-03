// 🌱 Classe de um nó (elemento da lista)
// Cada nó guarda um valor e uma referência para o próximo nó
class Node {
  constructor(valor) {
    this.valor = valor; // 🟢 Valor armazenado no nó
    this.proximo = null; // 👉 Referência para o próximo nó (inicialmente nulo)
    console.log(`🆕 Criado nó com valor: ${valor}`);
  }
}

// 📚 Classe da lista encadeada
// Gerencia os nós e oferece métodos para manipulação da lista
class ListaEncadeada {
  constructor() {
    this.inicio = null; // 🚩 Ponteiro para o primeiro nó da lista
    this.contador = 0; // 🔢 Contador de elementos na lista
  }

  // 📏 Retorna o tamanho da lista
  // Simplesmente retorna o contador de elementos
  size() {
    console.log(`📏 Tamanho atual da lista: ${this.contador}`);
    return this.contador;
  }

  // 🕳️ Verifica se a lista está vazia
  // Retorna true se não há elementos
  isEmpty() {
    const vazio = this.contador === 0;
    console.log(`🕳️ A lista está vazia? ${vazio}`);
    return vazio;
  }

  // 🚫 Sempre retorna false pois lista encadeada não tem limite fixo
  // Listas encadeadas crescem dinamicamente
  isFull() {
    console.log("🚫 A lista nunca está cheia (dinâmica)");
    return false;
  }

  // 🔍 Retorna o valor de um nó em uma posição específica
  // Percorre a lista até o índice desejado
  get(index) {
    if (index < 0 || index >= this.contador) {
      console.log(`❌ Índice ${index} inválido para get.`);
      return null;
    }
    let atual = this.inicio; // 🏁 Começa do início
    for (let i = 0; i < index; i++) {
      atual = atual.proximo; // 👉 Avança para o próximo nó
    }
    console.log(`🔍 Valor na posição ${index}: ${atual.valor}`);
    return atual.valor; // 🎯 Retorna o valor encontrado
  }

  // ➕ Insere valor em qualquer posição da lista
  // Se index = 0, insere no início. Senão, insere no meio ou fim
  insert(index, valor) {
    if (index < 0 || index > this.contador) {
      console.log(`❌ Índice ${index} inválido para inserção.`);
      return false;
    }

    const novoNo = new Node(valor); // 🆕 Cria novo nó

    if (index === 0) {
      // 🏁 Insere no início
      novoNo.proximo = this.inicio;
      this.inicio = novoNo;
      console.log(`➕ Inserido "${valor}" no início da lista.`);
    } else {
      // 🔗 Insere após algum nó
      let anterior = this.inicio;
      for (let i = 0; i < index - 1; i++) {
        anterior = anterior.proximo; // 👉 Avança até o nó anterior
      }
      novoNo.proximo = anterior.proximo; // 🔄 Liga novo nó ao próximo
      anterior.proximo = novoNo; // 🔗 Liga anterior ao novo nó
      console.log(`➕ Inserido "${valor}" na posição ${index}.`);
    }

    this.contador++; // ➕ Atualiza contador
    return true;
  }

  // 🗑️ Remove a primeira ocorrência de um valor
  // Percorre a lista e remove o nó que contém o valor
  remove(valor) {
    if (this.isEmpty()) {
      console.log("❌ Não é possível remover, lista está vazia.");
      return false;
    }

    if (this.inicio.valor === valor) {
      // 🏁 Valor está no início
      this.inicio = this.inicio.proximo;
      this.contador--;
      console.log(`🗑️ Removido "${valor}" do início da lista.`);
      return true;
    }

    let anterior = this.inicio;
    let atual = this.inicio.proximo;

    while (atual) {
      if (atual.valor === valor) {
        // 🎯 Encontrou o valor
        anterior.proximo = atual.proximo; // 🔗 Remove nó da lista
        this.contador--;
        console.log(`🗑️ Removido "${valor}" da posição intermediária.`);
        return true;
      }
      anterior = atual;
      atual = atual.proximo; // 👉 Avança
    }

    console.log(`❌ Valor "${valor}" não encontrado para remoção.`);
    return false; // ❌ Valor não encontrado
  }

  // ❌ Remove elemento em uma posição específica
  // Remove o nó no índice informado
  removeAt(index) {
    if (index < 0 || index >= this.contador) {
      console.log(`❌ Índice ${index} inválido para remoção.`);
      return false;
    }

    if (index === 0) {
      // 🏁 Remove do início
      this.inicio = this.inicio.proximo;
      console.log(`❌ Removido elemento da posição 0 (início).`);
    } else {
      // 🔗 Remove do meio ou fim
      let anterior = this.inicio;
      for (let i = 0; i < index - 1; i++) {
        anterior = anterior.proximo; // 👉 Avança até o nó anterior
      }
      anterior.proximo = anterior.proximo.proximo; // 🔗 Pula o nó removido
      console.log(`❌ Removido elemento da posição ${index}.`);
    }

    this.contador--; // ➖ Atualiza contador
    return true;
  }

  // 🔄 Substitui o valor de um elemento em uma posição específica
  // Percorre até o índice e troca o valor
  replace(index, novoValor) {
    if (index < 0 || index >= this.contador) {
      console.log(`❌ Índice ${index} inválido para substituição.`);
      return false;
    }

    let atual = this.inicio;
    for (let i = 0; i < index; i++) {
      atual = atual.proximo; // 👉 Avança até o nó desejado
    }
    const antigoValor = atual.valor;
    atual.valor = novoValor; // ✏️ Troca o valor
    console.log(`🔄 Substituído valor da posição ${index}: "${antigoValor}" -> "${novoValor}"`);
    return true;
  }

  // 👀 Mostra todos os valores da lista
  // Percorre a lista e exibe os valores em ordem
  exibir() {
    let atual = this.inicio;
    let resultado = [];
    while (atual) {
      resultado.push(atual.valor); // 📦 Adiciona valor ao resultado
      atual = atual.proximo; // 👉 Avança para o próximo nó
    }
    console.log(`👀 Lista atual: ${resultado.join(" -> ")}`); // 🖨️ Exibe lista formatada
  }
}

// -------------------- Teste 🚀 --------------------
console.log("\n🚀 Iniciando testes da Lista Encadeada\n");
// Cria uma nova lista encadeada
const lista = new ListaEncadeada();

// ➕ Insere elementos na lista
console.log("\n➕ Inserindo elementos:");
lista.insert(0, "A"); // Insere "A" no início
lista.insert(1, "B"); // Insere "B" na posição 1
lista.insert(2, "C"); // Insere "C" na posição 2 (final)
lista.insert(1, "X"); // Insere "X" na posição 1 (entre A e B)
// Resultado esperado: A -> X -> B -> C

lista.exibir(); // 👀 Exibe a lista atual

// 🔍 Busca valor na posição 2
console.log("\n🔍 Buscando valor na posição 2:");
lista.get(2); // Esperado: B

// 🔄 Troca valor da posição 2 por "Y"
console.log("\n🔄 Substituindo valor da posição 2 por 'Y':");
lista.replace(2, "Y"); // Agora: A -> X -> Y -> C
lista.exibir(); // Exibe lista após alteração

// 🗑️ Remove o valor "X" da lista
console.log("\n🗑️ Removendo valor 'X' da lista:");
lista.remove("X"); // Agora: A -> Y -> C
lista.exibir(); // Exibe lista após remoção

// ❌ Remove elemento na posição 1
console.log("\n❌ Removendo elemento na posição 1:");
lista.removeAt(1); // Agora: A -> C
lista.exibir(); // Exibe lista final

// 📏 Mostra informações da lista
console.log("\n📏 Informações finais da lista:");
lista.size(); // Esperado: 2
lista.isEmpty(); // Esperado: false
lista.isFull(); // Esperado: false
