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
class ListNode {
    /**
     * @param {number} val - Valor do nó
     * @param {ListNode} [nextNode=null] - Referência para o próximo nó
     */
    constructor(val, nextNode = null) {
        this.val = val;       // Valor armazenado no nó
        this.next = nextNode; // Referência para o próximo nó
    }
}

/**
 * Implementação de Lista Encadeada Simples
 */
class LinkedList {
    constructor() {
        /**
         * Inicializa a lista com um nó "fantasma" (dummy),
         * o que facilita a remoção de nós no início da lista.
         * @type {ListNode}
         */
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * Recupera o valor na posição indicada
     * @param {number} index - Índice para buscar o valor
     * @returns {number} Valor no índice ou -1 se estiver fora dos limites
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1; // Índice fora dos limites ou lista vazia
    }

    /**
     * Insere um novo nó no início da lista
     * @param {number} val - Valor a ser inserido
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            // Se a lista estava vazia antes da inserção
            this.tail = newNode;
        }
    }

    /**
     * Insere um novo nó no final da lista
     * @param {number} val - Valor a ser inserido
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * Remove o nó no índice indicado
     * @param {number} index - Índice para remover o nó
     * @returns {boolean} Verdadeiro se a remoção foi bem-sucedida, falso caso contrário
     */
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove o nó seguinte a 'curr'
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
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
