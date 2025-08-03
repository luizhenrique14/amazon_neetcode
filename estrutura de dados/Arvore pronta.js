import { TreeSet } from "js-sdsl";

const arvore = new TreeSet();
arvore.insert(10);
arvore.insert(5);
arvore.insert(20);

console.log(arvore.has(10));  // true
console.log(arvore.front());  // 5 (mínimo)
console.log(arvore.back());   // 20 (máximo)

arvore.eraseElementByValue(10);  // remove
