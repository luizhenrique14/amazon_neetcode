// Classe que representa um nó da árvore
class No {
  constructor(dado) {
    this.dado = dado; // Valor armazenado no nó
    this.esquerda = null; // Referência para o filho da esquerda
    this.direita = null; // Referência para o filho da direita
  }
}

// Classe da árvore binária de busca
class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null; // Início da árvore, inicialmente vazia
  }

  // Método para inserir um novo valor na árvore
  inserir(dado) {
    // Se a árvore estiver vazia, o novo nó vira a raiz
    if (this.raiz === null) {
      this.raiz = new No(dado);
      return;
    }

    // Começa a busca a partir da raiz
    let atual = this.raiz;
    let pai = null;

    while (true) {
      pai = atual;
      if (dado < atual.dado) {
        atual = atual.esquerda;
        if (atual === null) {
          pai.esquerda = new No(dado);
          return;
        }
      } else {
        atual = atual.direita;
        if (atual === null) {
          pai.direita = new No(dado);
          return;
        }
      }
    }
  }

  // Adicione este método dentro da classe ArvoreBinariaBusca
  imprimirArvore(no = this.raiz) {
    if (no !== null) {
      this.imprimirArvore(no.esquerda); // Visita o filho da esquerda
      console.log(no.dado); // Visita o nó atual (raiz)
      this.imprimirArvore(no.direita); // Visita o filho da direita
    }
  }

  buscar(dado) {
    let atual = this.raiz;
    while (atual !== null) {
      if (atual.dado === dado) {
        return atual; // encontrado
      }
      if (dado < atual.dado) {
        atual = atual.esquerda;
      } else {
        atual = atual.direita;
      }
    }
    return null;
  }

  remover(dado, no = this.raiz, pai = null) {
    if (no === null) return;

    if (dado < no.dado) {
      this.remover(dado, no.esquerda, no);
    } else if (dado > no.dado) {
      this.remover(dado, no.direita, no);
    } else {
      // Caso 1: nó sem filhos
      if (no.esquerda === null && no.direita === null) {
        if (pai === null) {
          this.raiz = null;
        } else if (pai.esquerda === no) {
          pai.esquerda = null;
        } else {
          pai.direita = null;
        }
      }

      // Caso 2: um filho à direita
      else if (no.esquerda === null) {
        if (pai === null) {
          this.raiz = no.direita;
        } else if (pai.esquerda === no) {
          pai.esquerda = no.direita;
        } else {
          pai.direita = no.direita;
        }
      }

      // Caso 2: um filho à esquerda
      else if (no.direita === null) {
        if (pai === null) {
          this.raiz = no.esquerda;
        } else if (pai.esquerda === no) {
          pai.esquerda = no.esquerda;
        } else {
          pai.direita = no.esquerda;
        }
      }

      // Caso 3: dois filhos
      else {
        let sucessorPai = no;
        let sucessor = no.direita;

        while (sucessor.esquerda !== null) {
          sucessorPai = sucessor;
          sucessor = sucessor.esquerda;
        }

        no.dado = sucessor.dado;

        if (sucessorPai.esquerda === sucessor) {
          sucessorPai.esquerda = sucessor.direita;
        } else {
          sucessorPai.direita = sucessor.direita;
        }
      }
    }
  }
}
