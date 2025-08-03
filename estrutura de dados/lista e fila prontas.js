// ✅ LISTA GENÉRICA (Array)
let lista = ["banana", "maçã", "laranja", "uva"];

// Métodos úteis:
lista.push("abacaxi");          // adiciona no final
lista.unshift("melancia");      // adiciona no início

let index_splice = 2
lista.splice(index_splice, 1);             // remove 1 item no índice 2
lista.shift();                             // remove do início
lista.pop();                               // remove do final

let copia = lista.slice();      // copia a lista
let temMaca = lista.includes("maçã"); // busca por valor
let index = lista.indexOf("uva");     // pega posição
let invertida = lista.reverse();      // inverte a ordem
let ordenada = lista.sort();          // ordena A-Z

// Ordenar números
let numeros = [10, 5, 8, 1];
numeros.sort((a, b) => a - b); // crescente
numeros.sort((a, b) => b - a); // decrescente

// 🪜 FILA (Queue - FIFO)
let fila = [];
fila.push("cliente 1");  // entra na fila
fila.push("cliente 2");
let atendido = fila.shift(); // sai da fila (primeiro a entrar, primeiro a sair)

// 🥞 PILHA (Stack - LIFO)
let pilha = [];
pilha.push("livro A");   // entra na pilha
pilha.push("livro B");   // entra na pilha
let topo = pilha.pop();  // sai da pilha (último a entrar, primeiro a sair)
