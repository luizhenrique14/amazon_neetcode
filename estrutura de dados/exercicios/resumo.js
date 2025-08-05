// Array Dinamico
class ArrayDinamico {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.tamanho = 0;
        this.arrayDinamicoBrabo = new Array(this.capacidade).fill(0);
    }
}
// -----------------------------------------------------------------------------
// Lista Duplamente Encadeada
class Node {
    constructor(valor, proximo = null, anterior = null) {
        this.anterior = anterior;
        this.valor = valor; 
        this.proximo = proximo; 
    }
}
class filaDuplamenteEncadeada {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }
}
// -----------------------------------------------------------------------------
// Lista Encadeada
class Node {
    constructor(valor, proximoNo = null) {
        this.valor = valor; 
        this.proximo = proximoNo; 
    }
}
class LinkedList {
    constructor() {
        this.inicio = new Node(-1);
        this.fim = this.inicio;
        this.tamanho = 0;
    }
}
// -----------------------------------------------------------------------------
// Pilha
class No {
    constructor(valor, abaixo = null) {
        this.valor = valor;
        this.abaixo = abaixo;
    }
}
class Pilha {
    constructor() {
        this.topo = null;
        this.tamanho = 0;
    }
}
// -----------------------------------------------------------------------------
// Tablea Hash
// Lista Encadeada Tabela Hash
class ListaEncadeada {
  constructor() {
    this.inicio = null;
    this.tamanho = 0;
  }

  adicionar(valor) {
    const novoNo = new No(valor);
    if (!this.inicio) {
      this.inicio = novoNo;
    } else {
      let atual = this.inicio;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
    this.tamanho++;
  }

  remover(chave) {
    if (!this.inicio) return;

    if (this.inicio.valor.startsWith(chave + ':')) {
      this.inicio = this.inicio.proximo;
      this.tamanho--;
      return;
    }

    let atual = this.inicio;
    while (atual.proximo) {
      if (atual.proximo.valor.startsWith(chave + ':')) {
        atual.proximo = atual.proximo.proximo;
        this.tamanho--;
        return;
      }
      atual = atual.proximo;
    }
  }

  imprimir() {
    let atual = this.inicio;
    while (atual) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }
}
// Tabela Hash
class TabelaHash {
  constructor(tamanho) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
    for (let i = 0; i < tamanho; i++) {
      this.tabela[i] = new ListaEncadeada();
    }
  }

  funcao_hash_hashDJB2(chave) {
    for (let i = 0; i < chave.length; i++) {
      hash = (5381 * 33) + chave.charCodeAt(i);
    }
    return Math.abs(hash)% this.tamanho;
  }

  inserir(chave, valor) {
      const indice = this.funcao_hash_hashDJB2(chave);
      this.tabela[indice].adicionar(`${chave}:${valor}`);
  }

  buscar(chave) {
    const indice = this.funcao_hash_hashDJB2(chave);
    let atual = this.tabela[indice].inicio;
    while (atual) {
      if (typeof atual.valor === 'string' && atual.valor.startsWith(chave + ':')) {
        const valor = atual.valor.split(':').slice(1).join(':');
        return valor;
      }
      atual = atual.proximo;
    }
    return undefined;
  }

  remover(chave) {
    const indice = this.funcao_hash_hashDJB2(chave);
    this.tabela[indice].remover(chave);
  }

  imprimir() {
    for (let i = 0; i < this.tabela.length; i++) {
      this.tabela[i].imprimir();
    }
  }
}