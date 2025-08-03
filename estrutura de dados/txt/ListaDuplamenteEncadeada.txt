// Nó com ponteiro para frente e para trás
class NoDuplo {
  constructor(valor) {
    // Cria um novo nó duplo com valor, anterior e próximo
    this.valor = valor;
    this.anterior = null;
    this.proximo = null;
    console.log(`[NoDuplo] Criado nó com valor: ${valor}`);
  }
}


class ListaDuplamenteEncadeada {
  constructor() {
    // Inicializa lista vazia
    this.inicio = null;
    this.fim = null;
    this.tamanho = 0;
    console.log('[ListaDuplamenteEncadeada] Lista criada vazia');
  }

  // Retorna o tamanho da lista
  tamanhoLista() {
    console.log(`[tamanhoLista] Tamanho atual da lista: ${this.tamanho}`);
    return this.tamanho;
  }

  // Verifica se a lista está vazia
  estaVazia() {
    const vazia = this.tamanho === 0;
    console.log(`[estaVazia] Lista está vazia? ${vazia}`);
    return vazia;
  }

  // Lista duplamente encadeada nunca está cheia (dinâmica)
  estaCheia() {
    console.log('[estaCheia] Lista nunca está cheia (dinâmica)');
    return false;
  }

  // Retorna o valor no índice especificado
  obter(indice) {
    console.log(`[obter] Buscando valor no índice ${indice}`);
    if (indice < 0 || indice >= this.tamanho) {
      console.log(`[obter] Índice ${indice} fora do intervalo!`);
      return null;
    }
    let atual = this.inicio;
    for (let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }
    console.log(`[obter] Valor encontrado: ${atual.valor}`);
    return atual.valor;
  }

  // Insere valor na posição indice
  inserir(indice, valor) {
    console.log(`[inserir] Inserindo valor '${valor}' no índice ${indice}`);
    if (indice < 0 || indice > this.tamanho) {
      console.log(`[inserir] Índice ${indice} inválido!`);
      return false;
    }
    const novo = new NoDuplo(valor);

    if (indice === 0) {
      // Inserção no início
      console.log('[inserir] Inserção no início');
      novo.proximo = this.inicio;
      if (this.inicio) this.inicio.anterior = novo;
      this.inicio = novo;
      if (!this.fim) this.fim = novo; // se for o primeiro nó
    } else if (indice === this.tamanho) {
      // Inserção no fim
      console.log('[inserir] Inserção no fim');
      novo.anterior = this.fim;
      if (this.fim) this.fim.proximo = novo;
      this.fim = novo;
    } else {
      // Inserção no meio
      console.log('[inserir] Inserção no meio');
      let atual = this.inicio;
      for (let i = 0; i < indice; i++) {
        atual = atual.proximo;
      }
      novo.anterior = atual.anterior;
      novo.proximo = atual;
      atual.anterior.proximo = novo;
      atual.anterior = novo;
    }

    this.tamanho++;
    console.log(`[inserir] Valor '${valor}' inserido. Tamanho atual: ${this.tamanho}`);
    return true;
  }

  // Remove o primeiro nó com o valor especificado
  remover(valor) {
    console.log(`[remover] Removendo valor '${valor}' da lista`);
    if (this.estaVazia()) {
      console.log('[remover] Lista está vazia, nada para remover');
      return false;
    }

    let atual = this.inicio;
    while (atual) {
      if (atual.valor === valor) {
        if (atual.anterior) {
          atual.anterior.proximo = atual.proximo;
        } else {
          this.inicio = atual.proximo;
        }

        if (atual.proximo) {
          atual.proximo.anterior = atual.anterior;
        } else {
          this.fim = atual.anterior;
        }

        this.tamanho--;
        console.log(`[remover] Valor '${valor}' removido. Tamanho atual: ${this.tamanho}`);
        return true;
      }
      atual = atual.proximo;
    }

    console.log(`[remover] Valor '${valor}' não encontrado na lista`);
    return false;
  }

  // Remove nó na posição indice
  removerIndice(indice) {
    console.log(`[removerIndice] Removendo nó no índice ${indice}`);
    if (indice < 0 || indice >= this.tamanho) {
      console.log(`[removerIndice] Índice ${indice} inválido!`);
      return false;
    }

    let atual = this.inicio;
    for (let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }

    if (atual.anterior) {
      atual.anterior.proximo = atual.proximo;
    } else {
      this.inicio = atual.proximo;
    }

    if (atual.proximo) {
      atual.proximo.anterior = atual.anterior;
    } else {
      this.fim = atual.anterior;
    }

    this.tamanho--;
    console.log(`[removerIndice] Nó removido no índice ${indice}. Tamanho atual: ${this.tamanho}`);
    return true;
  }

  // Substitui valor no índice
  substituir(indice, novoValor) {
    console.log(`[substituir] Substituindo valor no índice ${indice} por '${novoValor}'`);
    if (indice < 0 || indice >= this.tamanho) {
      console.log(`[substituir] Índice ${indice} inválido!`);
      return false;
    }

    let atual = this.inicio;
    for (let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }

    const valorAntigo = atual.valor;
    atual.valor = novoValor;
    console.log(`[substituir] Valor '${valorAntigo}' substituído por '${novoValor}'`);
    return true;
  }

  // Exibe a lista do início ao fim
  exibir() {
    let atual = this.inicio;
    const valores = [];
    while (atual) {
      valores.push(atual.valor);
      atual = atual.proximo;
    }
    console.log(`[exibir] Lista: ${valores.join(' <-> ')}`);
  }

  // Exibe a lista do fim ao início
  exibirReverso() {
    let atual = this.fim;
    const valores = [];
    while (atual) {
      valores.push(atual.valor);
      atual = atual.anterior;
    }
    console.log(`[exibirReverso] Lista reversa: ${valores.join(' <-> ')}`);
  }
}

// ----------------- Testes e Explicações -------------------
console.log('\n================ EXEMPLOS E TESTES ================\n');
console.log('Criando lista duplamente encadeada...');
const listaDupla = new ListaDuplamenteEncadeada();

console.log('\nInserindo elementos:');
listaDupla.inserir(0, "A"); // Inserção no início
listaDupla.inserir(1, "B"); // Inserção no fim
listaDupla.inserir(2, "C"); // Inserção no fim
listaDupla.inserir(1, "X"); // Inserção no meio (A <-> X <-> B <-> C)
listaDupla.exibir();

console.log('\nAcessando elemento pelo índice:');
console.log(`Valor no índice 2: ${listaDupla.obter(2)}`); // B

console.log('\nSubstituindo valor no índice 2 por "Y":');
listaDupla.substituir(2, "Y"); // A <-> X <-> Y <-> C
listaDupla.exibir();

console.log('\nRemovendo elemento "X":');
listaDupla.remover("X"); // A <-> Y <-> C
listaDupla.exibir();

console.log('\nRemovendo elemento no índice 1:');
listaDupla.removerIndice(1); // A <-> C
listaDupla.exibir();

console.log('\nExibindo lista reversa:');
listaDupla.exibirReverso(); // C <-> A

console.log('\nTestando métodos auxiliares:');
console.log(`Tamanho da lista: ${listaDupla.tamanhoLista()}`);
console.log(`Lista está vazia? ${listaDupla.estaVazia()}`);
console.log(`Lista está cheia? ${listaDupla.estaCheia()}`);

console.log('\nTentando acessar índice inválido:');
console.log(`Valor no índice 10: ${listaDupla.obter(10)}`);

console.log('\nTentando remover valor inexistente:');
listaDupla.remover("Z");

console.log('\nTentando remover índice inválido:');
listaDupla.removerIndice(10);

console.log('\n================ FIM DOS TESTES ================\n');
