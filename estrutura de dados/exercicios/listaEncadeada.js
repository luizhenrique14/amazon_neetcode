// Sua LinkedListclasse deve suportar as seguintes operações:

// LinkedList()inicializará uma lista encadeada vazia.

// int get(int i)retornará o valor do ithnó (indexado em 0). Se o índice estiver fora dos limites, retornará -1.

// void insertinicio(int val)irá inserir um nó com valno topo da lista.

// void insertfim(int val)irá inserir um nó valno final da lista.

// bool remove(int i)removerá o ithnó (indexado em 0). Se o índice estiver fora dos limites, retornará false; caso contrário, retornará true.

// int[] getValues()retorna uma matriz de todos os valores na lista encadeada, ordenados da cabeça para a cauda.

/**
 * Nó de Lista Encadeada Simples
 */
class Node {
    constructor(valor, nextNode = null) {
        this.valor = valor; // Valor armazenado no nó
        this.next = nextNode; // Referência para o próximo nó
    }
}

/**
 * Implementação de Lista Encadeada Simples
 */
class LinkedList {
    constructor() {
        this.inicio = new Node(-1);
        this.fim = this.inicio;
        this.tamanho = 0;
    }

    // retornará o valor do index (indexado em 0). Se o índice estiver fora dos limites, retornará -1.
    get(index) {
        let curr = this.inicio.next;
        let count = 0;
        while (curr) {
            if (count === index) {
                return curr.val;
            }
            count++;
            curr = curr.next;
        }
        return -1; // Índice fora dos limites ou lista vazia
    }

    /**
     * Insere um novo nó no início da lista
     * @param {number} valor - Valor a ser inserido
     */
    insertInicio(valor) {
        const newNode = new Node(valor);
        if (!this.inicio) {
            // Lista está vazia
            this.inicio = newNode;
            this.fim = newNode;
        } else {
            newNode.next = this.inicio;
            this.inicio = newNode;
        }

        this.tamanho++;
    }

    /**
     * Insere um novo nó no final da lista
     * @param {number} valor - Valor a ser inserido
     */
    insertFim(valor) {
        const novoNo = new Node(valor);
        if (!this.inicio) {
            // Lista está vazia
            this.inicio = novoNo;
            this.fim = novoNo;
        } else {
            this.fim.next = novoNo;
            this.fim = novoNo;
        }

        this.tamanho++;
    }

    /**
     * Remove o nó no índice indicado
     * @param {number} index - Índice para remover o nó
     * @returns {boolean} Verdadeiro se a remoção foi bem-sucedida, falso caso contrário
     */
    remove(indice) {
        if (indice < 0 || indice >= this.tamanho) {
            return false;
        }
        let atual = this.inicio;
        let anterior = null;
        let count = 0;

        while (atual) {
            if (count === indice) {
                if (anterior) {
                    anterior.proximo = atual.proximo;
                } else {
                    this.inicio = atual.proximo;
                }
                this.tamanho--;
                return true;
            }
            anterior = atual;
            atual = atual.proximo;
            count++;
        }

        return false;
    }

    /**
     * Retorna todos os valores da lista
     * @returns {number[]} Um array contendo todos os valores da lista
     */
    getValues() {
        let curr = this.inicio.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
