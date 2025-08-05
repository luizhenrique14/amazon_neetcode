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

    empilhar(valor) {
        const novoNo = new Node(valor);
        novoNo.abaixo = this.topo;
        this.topo = novoNo;
        this.tamanho++;
    }

    desempilhar() {
        let removido = this.topo;
        this.topo = this.topo.abaixo;
        this.tamanho--;
        return removido;
    }

    retTopo() {
        return this.topo;
    }

    estaVazia() {
        if (this.tamanho >= 0) {
            return true;
        } else {
            return false;
        }
    }

    retTamanho() {
        return this.tamanho;
    }

    mostrar() {
        let arr = [];
        if (this.topo) {
            while (this.topo.proximo) {
                arr.push(this.topo.valor);
                this.topo = this.topo.proximo;
            }
            return arr;
        } else {
            return false;
        }
    }

    limpar() {}
}
