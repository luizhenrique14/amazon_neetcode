
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

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
    this.tabela[indice].remover(chave);
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

const tabela = new TabelaHash(5);
tabela.inserir('nome', 'João');
tabela.inserir('idade', 30);
tabela.inserir('cidade', 'São Paulo');
tabela.inserir('nome', 'Maria');
tabela.buscar('nome');
tabela.buscar('idade');
tabela.buscar('cidade');
tabela.buscar('estado');
tabela.remover('idade');
tabela.remover('estado');
tabela.imprimir();
