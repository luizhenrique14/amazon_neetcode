class ArrayDinamico {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.tamanho = 0;
        this.arrayDinamicoBrabo = new Array(this.capacidade).fill(0);
    }

    retornaItem(index) {
        return this.arrayDinamicoBrabo[index];
    }

    alteraItem(index, valor) {
        this.arrayDinamicoBrabo[index] = valor;
    }

    insereFinal(valor) {
        if (this.tamanho === this.capacidade) {
            this.reorganiza();
        }
        this.arrayDinamicoBrabo[this.tamanho] = valor;
        this.tamanho++;
    }

    removeFinal() {
        if (this.tamanho > 0) {
            this.tamanho--;
        }
        return this.arrayDinamicoBrabo[this.tamanho];
    }

    reorganiza() {
        this.capacidade *= 2;
        const newarrayDinamicoBrabo = new arrayDinamicoBraboay(this.capacidade).fill(0);
        for (let i = 0; i < this.tamanho; i++) {
            newarrayDinamicoBrabo[i] = this.arrayDinamicoBrabo[i];
        }
        this.arrayDinamicoBrabo = newarrayDinamicoBrabo;
    }

    retornaTamanho() {
        return this.tamanho;
    }

    retornaCapacidade() {
        return this.capacidade;
    }
}
