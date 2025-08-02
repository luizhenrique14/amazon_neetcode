// Sua DynamicArrayclasse deve suportar as seguintes operações:

// DynamicArray(int capacity)inicializará um array vazio com capacidade de capacity, onde capacity > 0.

// int get(int i)retornará o elemento no índice i. Suponha que o índice iseja válido.

// void set(int i, int n)definirá o elemento no índice icomo n. Suponha que o índice iseja válido.

// void pushback(int n) empurrará o elemento n para o final do array.

// int popback() irá estourar e retornar o elemento no final do array. Suponha que o array não esteja vazio.

// void resize() dobrará a capacidade do conjunto .

// int getSize() retornará o número de elementos no array.

// int getCapacity() retornará a capacidade do array.

// Se chamarmos , mas o array estiver cheio, devemos redimensionar o array primeiro.void pushback(int n)


/**
 * Dynamic Array Class
 * Note: JavaScript arrays are dynamic by default,
 * but this class is used to simulate the behavior of a dynamic array.
 */
class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity - Initial capacity of the array.
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity).fill(0);
    }

    /**
     * Get the value at the i-th index.
     * @param {number} i - The index to get the value from.
     * @returns {number} - The value at the i-th index.
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * Set a value at the i-th index.
     * @param {number} i - The index to insert the value at.
     * @param {number} n - The value to insert.
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * Insert a value in the last position of the array.
     * @param {number} n - The value to insert.
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * Remove the last element in the array.
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            // soft delete the last element
            this.length--;
        }
        return this.arr[this.length];
    }

    /**
     * Resize the array to double its current capacity.
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * Get the current size of the array.
     * @returns {number} - The current size.
     */
    getSize() {
        return this.length;
    }

    /**
     * Get the current capacity of the array.
     * @returns {number} - The current capacity.
     */
    getCapacity() {
        return this.capacity;
    }
}
