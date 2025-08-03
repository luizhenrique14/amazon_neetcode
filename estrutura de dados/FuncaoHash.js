function funcao_hash_hashDJB2(chave, tamanho) {
    let hash = 5381;
    let multiplicador = 33;
    console.log(`� [INICIO] Chave: '${chave}', Tamanho da tabela: ${tamanho}`);
    for (let i = 0; i < chave.length; i++) {
        let codigo_numerico_do_caractere = chave.charCodeAt(i); // Obtém o código numérico do caractere
        console.log(`  ➡️ Caractere '${chave[i]}' (pos do for ${i}), codigo_numerico_do_caractere: ${codigo_numerico_do_caractere}, hash antes: ${hash}`);
        hash = hash * multiplicador + codigo_numerico_do_caractere; // Atualiza o hash
        console.log(`  🔄 hash depois: ${hash}`);
    }
    let resto = hash % tamanho;
    console.log(
        `🧮 [CÁLCULO] hash % tamanho = ${hash} % ${tamanho} = ${resto}`
    );

    let indice = Math.abs(resto); // Garantindo que o índice seja positivo
    console.log(
        `✅ [FIM] Índice calculado para chave '${chave}': ${indice} (valor absoluto do resto)`
    );
    return indice;
}

// const chaves = ['Luiz Henrique Oliveira', 'Isabella Vieira', 'Marcia Regina', 'Luiz Antonio', 'email', 'João', 'Maria', 'abc', 'xyz', ''];
const chaves = ["L L L ", "L L L "]; // Testes com chaves variadas
// Testes com diversas entradas
const tamanhoTabela = chaves.length * 2; // Tamanho da tabela é o dobro do número de chaves

chaves.forEach((chave) => {
    funcao_hash_hashDJB2(chave, tamanhoTabela);
});
