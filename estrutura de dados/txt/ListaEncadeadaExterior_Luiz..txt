class No{
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.inicio = null;
    }

    adicionar_na_lista(valor) {
        if (this.inicio) {
            let atual = this.inicio;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = new No(valor);
        } else {
            this.inicio = new No(valor);
        }
    }

    remover_da_lista(valor) {
        if (!this.inicio) {
            return;
        }

        if (this.inicio.valor === valor) {
            this.inicio = this.inicio.proximo;
            return;
        }

        let atual = this.inicio;
        let anterior = null;

        while (atual && atual.valor !== valor) {
            anterior = atual;
            atual = atual.proximo;
        }

        if (atual) {
            anterior.proximo = atual.proximo;
        }
    }
}