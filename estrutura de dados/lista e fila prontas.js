// ✅ LISTA GENÉRICA
console.log("📚 Lista Genérica");

let lista = [];

// Adicionar elementos
lista.push("banana");           // fim
lista.unshift("maçã");          // início
lista.push("laranja");

console.log("Lista atual:", lista);

// Remover elementos
lista.pop();                    // remove do fim
lista.shift();                  // remove do início

console.log("Após remoções:", lista);

// Buscar índice
let indice = lista.indexOf("banana");
console.log("Índice de 'banana':", indice);

// Remover por índice
if (indice !== -1) lista.splice(indice, 1);

console.log("Final da lista:", lista);
console.log("\n");

// 🪜 FILA (QUEUE)
console.log("🪜 Fila (FIFO)");

let fila = [];

// Enfileirar
fila.push("cliente 1");
fila.push("cliente 2");
fila.push("cliente 3");

console.log("Fila atual:", fila);

// Desenfileirar
let atendido = fila.shift();
console.log("Atendido:", atendido);
console.log("Fila após atendimento:", fila);
console.log("\n");

// 🥞 PILHA (STACK)
console.log("🥞 Pilha (LIFO)");

let pilha = [];

// Empilhar
pilha.push("livro A");
pilha.push("livro B");
pilha.push("livro C");

console.log("Pilha atual:", pilha);

// Desempilhar
let removido = pilha.pop();
console.log("Topo removido:", removido);
console.log("Pilha após pop:", pilha);
