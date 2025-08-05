// ✅ Métodos obrigatórios:
// Método	Descrição
// adicionarInicio(valor)	Adiciona um elemento no início da fila
// adicionarFim(valor)	Adiciona um elemento no final da fila
// removerInicio()	Remove e retorna o elemento do início da fila. Se estiver vazia, retorna null
// removerFim()	Remove e retorna o elemento do final da fila. Se estiver vazia, retorna null
// primeiro()	Retorna o elemento no início da fila sem remover. Se estiver vazia, retorna null
// ultimo()	Retorna o elemento no final da fila sem remover. Se estiver vazia, retorna null
// estaVazia()	Retorna true se a deque estiver vazia, senão false
// tamanho()	Retorna a quantidade de elementos na deque

class Node {
    constructor(val, proximo = null, anterior = null) {
        this.anterior = anterior; // Referência para o anterior nó
        this.val = val; // Valor armazenado no nó
        this.proximo = proximo; // Referência para o próximo nó
    }
}

class filaDuplamenteEncadeada {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }

    estaVazia() {
        if (this.tamanho == 0) {
            return true;
        } else {
            return false;
        }
    }

    adicinarInicio(valor) {
        let novoNo = new No(valor);
        if (this.estaVazia()) {
            this.fim = novoNo;
            this.inicio = novoNo;
        } else {
            novoNo.proximo = this.inicio;
            this.inicio.anterior = novoNo;
            this.inicio = novoNo;
        }
        this.tamanho++;
    }

    adicionarFim(valor) {
        let novoNo = new No(valor);
        if (this.estaVazia()) {
            this.fim = novoNo;
            this.inicio = novoNo;
        } else {
            novoNo.anterior = this.fim;
            this.fim.proximo = novoNo;
            this.fim = novoNo;
        }
        this.tamanho++;
    }

    removerInicio() {
        if (this.estaVazia()) {
            return null;
        }
        let valorRemovido = this.inicio.valor;
        if (this.inicio == this.fim) {
            this.inicio = null;
            this.fim = null;
        } else {
            let novoInicio = this.inicio.proximo;
            novoInicio.anterior = null;
            this.inicio = novoInicio;
        }
        this.tamanho--;
        return valorRemovido;
    }

    removerFim() {
        if (this.estaVazia()) {
            return null;
        }
        let valorRemovido = this.fim.valor;
        if (this.inicio === this.fim) {
            this.inicio = null;
            this.fim = null;
        } else {
            let novoFim = this.fim.anterior;
            novoFim.proximo = null;
            this.fim = novoFim;
        }
        this.tamanho--;
        return valorRemovido;
    }

    primeiro() {
        if (this.inicio) {
            return this.inicio.valor;
        } else {
            return null;
        }
    }

    ultimo() {
        if (this.fim) {
            return this.fim.valor;
        } else {
            return null;
        }
    }

    retornaTamanho(){
        return this.tamanho;
    }
}
