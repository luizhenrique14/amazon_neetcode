// ===============================
// LISTA ENCADEADA INTERIOR HOMOGÊNEA
// ===============================

// Representa um nó da lista (contém apenas números)
class No {
  constructor(valor) {
    this.valor = valor;     // Valor numérico
    this.proximo = null;    // Ponteiro para o próximo nó
  }
}

// Lista encadeada que só armazena números (homogênea)
class ListaHomogenea {
  constructor() {
    this.inicio = null;
    console.log("📦 Lista homogênea criada (vazia).");
  }

  // Adiciona um novo valor no fim da lista
  adicionar(valor) {
    console.log(`➕ Adicionando valor: ${valor}`);
    const novoNo = new No(valor);

    if (!this.inicio) {
      this.inicio = novoNo;
      console.log("🟢 Primeiro nó adicionado.");
    } else {
      let atual = this.inicio;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
      console.log("🔗 Valor encadeado ao final.");
    }
  }

  // Imprime todos os valores da lista
  imprimir() {
    let atual = this.inicio;
    let resultado = "🧾 Lista: ";

    if (!atual) {
      console.log("⚠️ Lista vazia.");
      return;
    }

    while (atual) {
      resultado += `[ ${atual.valor} ] → `;
      atual = atual.proximo;
    }

    resultado += "null";
    console.log(resultado);
  }
}

// Tabela com listas encadeadas internas homogêneas
class TabelaComListas {
  constructor(tamanho) {
    this.buckets = new Array(tamanho).fill(null).map(() => new ListaHomogenea());
    console.log(`📊 Tabela criada com ${tamanho} posições.`);
  }

  // Função hash simples para espalhar valores
  hash(valor) {
    return valor % this.buckets.length;
  }

  // Adiciona valor usando a função hash para encontrar o índice
  adicionar(valor) {
    const indice = this.hash(valor);
    console.log(`\n🔍 Hash para ${valor} = ${indice}`);
    this.buckets[indice].adicionar(valor);
  }

  // Imprime toda a tabela com as listas internas
  imprimirTabela() {
    console.log("\n📋 Imprimindo Tabela com Listas:");
    for (let i = 0; i < this.buckets.length; i++) {
      process.stdout.write(`Índice ${i}: `);
      this.buckets[i].imprimir();
    }
  }
}

// ===============================
// TESTE COMPLETO
// ===============================

const tabela = new TabelaComListas(5); // Cria tabela com 5 posições

// Adicionando números inteiros (homogêneos)
tabela.adicionar(10);
tabela.adicionar(15);
tabela.adicionar(7);
tabela.adicionar(5);
tabela.adicionar(20);
tabela.adicionar(12);

// Imprimindo o conteúdo da tabela com listas encadeadas internas
tabela.imprimirTabela();
