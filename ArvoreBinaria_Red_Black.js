// Classe do nó com cor
class No {
  constructor(dado, cor = 'vermelho') {
    this.dado = dado;
    this.cor = cor;
    this.esquerda = null;
    this.direita = null;
    this.pai = null;
  }
}

class ArvoreRedBlack {
  constructor() {
    this.NULO = new No(null, 'preto');
    this.raiz = this.NULO;
  }

  rotacionarEsquerda(x) {
    let y = x.direita;
    x.direita = y.esquerda;
    if (y.esquerda !== this.NULO) {
      y.esquerda.pai = x;
    }
    y.pai = x.pai;
    if (x.pai === null) {
      this.raiz = y;
    } else if (x === x.pai.esquerda) {
      x.pai.esquerda = y;
    } else {
      x.pai.direita = y;
    }
    y.esquerda = x;
    x.pai = y;
  }

  rotacionarDireita(y) {
    let x = y.esquerda;
    y.esquerda = x.direita;
    if (x.direita !== this.NULO) {
      x.direita.pai = y;
    }
    x.pai = y.pai;
    if (y.pai === null) {
      this.raiz = x;
    } else if (y === y.pai.direita) {
      y.pai.direita = x;
    } else {
      y.pai.esquerda = x;
    }
    x.direita = y;
    y.pai = x;
  }

  balancearInsercao(z) {
    while (z.pai && z.pai.cor === 'vermelho') {
      if (z.pai === z.pai.pai.esquerda) {
        let y = z.pai.pai.direita;
        if (y && y.cor === 'vermelho') {
          z.pai.cor = 'preto';
          y.cor = 'preto';
          z.pai.pai.cor = 'vermelho';
          z = z.pai.pai;
        } else {
          if (z === z.pai.direita) {
            z = z.pai;
            this.rotacionarEsquerda(z);
          }
          z.pai.cor = 'preto';
          z.pai.pai.cor = 'vermelho';
          this.rotacionarDireita(z.pai.pai);
        }
      } else {
        let y = z.pai.pai.esquerda;
        if (y && y.cor === 'vermelho') {
          z.pai.cor = 'preto';
          y.cor = 'preto';
          z.pai.pai.cor = 'vermelho';
          z = z.pai.pai;
        } else {
          if (z === z.pai.esquerda) {
            z = z.pai;
            this.rotacionarDireita(z);
          }
          z.pai.cor = 'preto';
          z.pai.pai.cor = 'vermelho';
          this.rotacionarEsquerda(z.pai.pai);
        }
      }
    }
    this.raiz.cor = 'preto';
  }

  inserir(dado) {
    let novo = new No(dado);
    novo.esquerda = this.NULO;
    novo.direita = this.NULO;

    let y = null;
    let x = this.raiz;

    while (x !== this.NULO) {
      y = x;
      if (novo.dado < x.dado) {
        x = x.esquerda;
      } else {
        x = x.direita;
      }
    }

    novo.pai = y;
    if (y === null) {
      this.raiz = novo;
    } else if (novo.dado < y.dado) {
      y.esquerda = novo;
    } else {
      y.direita = novo;
    }

    novo.cor = 'vermelho';
    this.balancearInsercao(novo);
  }

  emOrdem(no = this.raiz) {
    if (no !== this.NULO) {
      this.emOrdem(no.esquerda);
      console.log(`${no.dado} (${no.cor})`);
      this.emOrdem(no.direita);
    }
  }
} 

// Exemplo de uso
const arvore = new ArvoreRedBlack();
arvore.inserir(10);
arvore.inserir(20);
arvore.inserir(30);
arvore.inserir(15);
arvore.emOrdem();
