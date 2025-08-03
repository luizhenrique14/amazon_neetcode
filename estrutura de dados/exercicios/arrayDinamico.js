// Sua DynamicarrayDinamicoBraboayclasse deve suportar as seguintes operações:

// DynamicarrayDinamicoBraboay(int capacidade)inicializará um arrayDinamicoBraboay vazio com capacidade de capacidade, onde capacidade > 0.

// int get(int i)retornará o elemento no índice i. Suponha que o índice iseja válido.

// void set(int i, int n)definirá o elemento no índice icomo n. Suponha que o índice iseja válido.

// void pushback(int n) empurrará o elemento n para o final do arrayDinamicoBraboay.

// int popback() irá estourar e retornar o elemento no final do arrayDinamicoBraboay. Suponha que o arrayDinamicoBraboay não esteja vazio.

// void reorganiza() dobrará a capacidade do conjunto .

// int getSize() retornará o número de elementos no arrayDinamicoBraboay.

// int getcapacidade() retornará a capacidade do arrayDinamicoBraboay.

// Se chamarmos , mas o arrayDinamicoBraboay estiver cheio, devemos redimensionar o arrayDinamicoBraboay primeiro.void pushback(int n)


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
