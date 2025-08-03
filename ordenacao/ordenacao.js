// 🔢 Ordenação de Números
let numeros = [5, 2, 9, 1, 7];

console.log("Original:", numeros);

// 📈 Ordem crescente
let crescente = [...numeros].sort((a, b) => a - b);
console.log("Crescente:", crescente); // [1, 2, 5, 7, 9]

// 📉 Ordem decrescente
let decrescente = [...numeros].sort((a, b) => b - a);
console.log("Decrescente:", decrescente); // [9, 7, 5, 2, 1]

// 🔤 Ordenação de Strings
let frutas = ["banana", "maçã", "laranja", "abacate"];

console.log("\nOriginal (frutas):", frutas);

// 🅰️ Ordem alfabética (A-Z)
let alfabetica = [...frutas].sort();
console.log("Ordem alfabética (A-Z):", alfabetica); // ["abacate", "banana", "laranja", "maçã"]

// 🆎 Ordem alfabética inversa (Z-A)
let inversa = [...frutas].sort().reverse();
console.log("Ordem inversa (Z-A):", inversa); // ["maçã", "laranja", "banana", "abacate"]

// 👨‍👩‍👧‍👦 Ordenação de Objetos
let pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 20 },
  { nome: "Bruno", idade: 30 }
];

console.log("\nOriginal (pessoas):", pessoas);

// 👵 Ordenar por idade (crescente)
let porIdade = [...pessoas].sort((a, b) => a.idade - b.idade);
console.log("Ordenado por idade (crescente):", porIdade);

// 🧑‍💼 Ordenar por nome (A-Z)
let porNome = [...pessoas].sort((a, b) => a.nome.localeCompare(b.nome));
console.log("Ordenado por nome (A-Z):", porNome);
