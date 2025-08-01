// Classe do nó da árvore B
class NoB {
  constructor(t, folha = true) {
    this.t = t; // Grau mínimo
    this.folha = folha;
    this.chaves = [];
    this.filhos = [];
  }

  inserirNaoCheio(chave) {
    let i = this.chaves.length - 1;

    if (this.folha) {
      while (i >= 0 && chave < this.chaves[i]) {
        i--;
      }
      this.chaves.splice(i + 1, 0, chave);
    } else {
      while (i >= 0 && chave < this.chaves[i]) {
        i--;
      }
      i++;

      if (this.filhos[i].chaves.length === 2 * this.t - 1) {
        this.dividirFilho(i);
        if (chave > this.chaves[i]) i++;
      }
      this.filhos[i].inserirNaoCheio(chave);
    }
  }

  dividirFilho(i) {
    const y = this.filhos[i];
    const z = new NoB(y.t, y.folha);
    const t = y.t;

    z.chaves = y.chaves.splice(t);
    this.chaves.splice(i, 0, y.chaves.pop());

    if (!y.folha) {
      z.filhos = y.filhos.splice(t);
    }

    this.filhos.splice(i + 1, 0, z);
  }

  emOrdem() {
    let i;
    for (i = 0; i < this.chaves.length; i++) {
      if (!this.folha) this.filhos[i].emOrdem();
      console.log(this.chaves[i]);
    }
    if (!this.folha) this.filhos[i].emOrdem();
  }
}

class ArvoreB {
  constructor(t) {
    this.t = t;
    this.raiz = new NoB(t);
  }

  inserir(chave) {
    const r = this.raiz;
    if (r.chaves.length === 2 * this.t - 1) {
      const s = new NoB(this.t, false);
      s.filhos[0] = r;
      s.dividirFilho(0);
      s.inserirNaoCheio(chave);
      this.raiz = s;
    } else {
      r.inserirNaoCheio(chave);
    }
  }

  emOrdem() {
    if (this.raiz) this.raiz.emOrdem();
  }
}

// Exemplo de uso
const arvoreB = new ArvoreB(2); // Grau mínimo 2
arvoreB.inserir(10);
arvoreB.inserir(20);
arvoreB.inserir(5);
arvoreB.inserir(6);
arvoreB.inserir(12);
arvoreB.inserir(30);
arvoreB.inserir(7);
arvoreB.inserir(17);

console.log("\nEm ordem:");
arvoreB.emOrdem();
