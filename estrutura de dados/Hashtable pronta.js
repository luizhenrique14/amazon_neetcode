const tabelaHash = new Map();

// ➕ Inserir valores
tabelaHash.set("chave1", "valor1");
tabelaHash.set("chave2", "valor2");
tabelaHash.set("idade", 30);
tabelaHash.set("ativo", true);

// 🔍 Buscar valor
console.log(tabelaHash.get("chave1")); // "valor1"

// ❓ Verificar se uma chave existe
console.log(tabelaHash.has("idade")); // true

// ❌ Remover uma chave
tabelaHash.delete("chave2");

// 🧹 Limpar tudo
// tabelaHash.clear();

// 📏 Tamanho da tabela
console.log(tabelaHash.size); // 3 (se não limpou)

// 🔁 Iterar sobre a tabela
for (let [chave, valor] of tabelaHash) {
  console.log(`🔑 ${chave}:`, valor);
}
