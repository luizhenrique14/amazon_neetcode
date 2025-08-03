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

    // Exercício 1: implemente este método para adicionar um elemento no topo
    empilhar(valor) {
        const novoNo = new Node(valor);
        novoNo.abaixo = this.topo;
        this.topo = novoNo;
        this.tamanho++;
    }

    // Exercício 2: implemente este método para remover e retornar o elemento do topo
    desempilhar() {
        let removido = this.topo;
        this.topo = removido.abaixo;
        this.tamanho--;
        return removido;
    }

    // Exercício 3: retorne o elemento do topo sem removê-lo
    retTopo() {
        return this.topo;
    }

    // Exercício 4: retorne true se a pilha estiver vazia
    estaVazia() {
        if (this.tamanho >= 0) {
            return true;
        } else {
            return false;
        }
    }

    // Exercício 5: retorne a quantidade de elementos na pilha
    retTamanho() {
        return this.tamanho;
    }

    // Exercício 6: retorne um array representando a pilha do topo até o fundo
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

    // Exercício 7: limpe todos os elementos da pilha
    limpar() {}
}
