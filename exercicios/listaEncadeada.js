// Sua LinkedListclasse deve suportar as seguintes operações:

// LinkedList()inicializará uma lista encadeada vazia.

// int get(int i)retornará o valor do ithnó (indexado em 0). Se o índice estiver fora dos limites, retornará -1.

// void insertHead(int val)irá inserir um nó com valno topo da lista.

// void insertTail(int val)irá inserir um nó valno final da lista.

// bool remove(int i)removerá o ithnó (indexado em 0). Se o índice estiver fora dos limites, retornará false; caso contrário, retornará true.

// int[] getValues()retorna uma matriz de todos os valores na lista encadeada, ordenados da cabeça para a cauda.

/**
 * Nó de Lista Encadeada Simples
 */
class Node {
    constructor(val, nextNode = null) {
        this.val = val; // Valor armazenado no nó
        this.next = nextNode; // Referência para o próximo nó
    }
}

/**
 * Implementação de Lista Encadeada Simples
 */
class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
        this.tamanho = 0;
    }

    // retornará o valor do index (indexado em 0). Se o índice estiver fora dos limites, retornará -1.
    get(index) {
        let curr = this.head.next;
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
     * @param {number} val - Valor a ser inserido
     */
    insertHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            // Se a lista estava vazia antes da inserção
            this.tail = newNode;
        }
        this.tamanho++;
    }

    /**
     * Insere um novo nó no final da lista
     * @param {number} val - Valor a ser inserido
     */
    insertTail(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
        this.tamanho++;
    }

    /**
     * Remove o nó no índice indicado
     * @param {number} index - Índice para remover o nó
     * @returns {boolean} Verdadeiro se a remoção foi bem-sucedida, falso caso contrário
     */
    remove(indice) {
        let atual = this.inicio.proximo;
        let count = 0;
        let anterior;

        while (atual) {
            if (count === indice) {
                anterior.proximo = atual.proximo;
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
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
