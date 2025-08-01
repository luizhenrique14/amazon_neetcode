// Classe do nó da árvore AVL
class No {
  constructor(dado) {
    this.dado = dado;
    this.altura = 1;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreAVL {
  constructor() {
    this.raiz = null;
  }

  // Função utilitária para obter a altura de um nó
  altura(no) {
    return no ? no.altura : 0;
  }

  // Função utilitária para obter o fator de balanceamento de um nó
  fatorBalanceamento(no) {
    return no ? this.altura(no.esquerda) - this.altura(no.direita) : 0;
  }

  // Atualiza a altura de um nó
  atualizarAltura(no) {
    no.altura = 1 + Math.max(this.altura(no.esquerda), this.altura(no.direita));
  }

  // Rotação à direita
  rotacionarDireita(y) {
    const x = y.esquerda;
    const T2 = x.direita;

    x.direita = y;
    y.esquerda = T2;

    this.atualizarAltura(y);
    this.atualizarAltura(x);

    return x;
  }

  // Rotação à esquerda
  rotacionarEsquerda(x) {
    const y = x.direita;
    const T2 = y.esquerda;

    y.esquerda = x;
    x.direita = T2;

    this.atualizarAltura(x);
    this.atualizarAltura(y);

    return y;
  }

  // Inserção balanceada
  inserir(no, dado) {
    if (!no) return new No(dado);

    if (dado < no.dado) {
      no.esquerda = this.inserir(no.esquerda, dado);
    } else if (dado > no.dado) {
      no.direita = this.inserir(no.direita, dado);
    } else {
      return no; // Duplicados não são permitidos
    }

    this.atualizarAltura(no);

    const balanceamento = this.fatorBalanceamento(no);

    // Rotação simples à direita
    if (balanceamento > 1 && dado < no.esquerda.dado) return this.rotacionarDireita(no);

    // Rotação simples à esquerda
    if (balanceamento < -1 && dado > no.direita.dado) return this.rotacionarEsquerda(no);

    // Rotação dupla à esquerda-direita
    if (balanceamento > 1 && dado > no.esquerda.dado) {
      no.esquerda = this.rotacionarEsquerda(no.esquerda);
      return this.rotacionarDireita(no);
    }

    // Rotação dupla à direita-esquerda
    if (balanceamento < -1 && dado < no.direita.dado) {
      no.direita = this.rotacionarDireita(no.direita);
      return this.rotacionarEsquerda(no);
    }

    return no;
  }

  // Função pública de inserção
  inserirValor(dado) {
    this.raiz = this.inserir(this.raiz, dado);
  }

  // Impressão em ordem
  emOrdem(no = this.raiz) {
    if (no !== null) {
      this.emOrdem(no.esquerda);
      console.log(`${no.dado} (altura: ${no.altura})`);
      this.emOrdem(no.direita);
    }
  }
}

// Exemplo de uso
const arvore = new ArvoreAVL();
arvore.inserirValor(10);
arvore.inserirValor(20);
arvore.inserirValor(30);
arvore.inserirValor(15);
arvore.inserirValor(25);
arvore.inserirValor(5);
arvore.inserirValor(2);

arvore.emOrdem();
