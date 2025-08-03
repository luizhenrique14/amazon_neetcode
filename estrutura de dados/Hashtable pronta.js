const tabelaHash = new Map();

// ➕ Inserir valores
tabelaHash.set("chave1", "valor1");
tabelaHash.set("chave2", "valor2");
tabelaHash.set("idade", 30);
tabelaHash.set("ativo", true);

// 🔍 Buscar valor
tabelaHash.get("chave1");

// ❓ Verificar se uma chave existe
tabelaHash.has("idade");

// ❌ Remover uma chave
tabelaHash.delete("chave2");

// 🧹 Limpar tudo (descomente se quiser limpar tudo)
// tabelaHash.clear();

// 📏 Tamanho da tabela
tabelaHash.size;

// 🔁 Iterar sobre a tabela
for (let [chave, valor] of tabelaHash) {
  // fazer algo com chave e valor
}
