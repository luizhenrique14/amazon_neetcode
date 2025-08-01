// ===============================
// LISTA ENCADEADA INTERIOR HETEROGÊNEA
// ===============================

// Classe que representa um nó da lista encadeada
class No {
  constructor(nome, dados) {
    this.nome = nome;       // Nome identificador (ex: "Ana", "João")
    this.dados = dados;     // Dados heterogêneos (array, objeto, número, string, etc.)
    this.proximo = null;    // Ponteiro para o próximo nó
  }
}

// Classe da Lista Encadeada Interior Heterogênea
class ListaEncadeadaHeterogenea {
  constructor() {
    this.inicio = null; // Início da lista (primeiro nó)
    console.log("✅ Lista encadeada criada (vazia).");
  }

  // Método para adicionar um novo nó ao final da lista
  adicionar(nome, dados) {
    console.log(`🔄 Adicionando "${nome}" com dados:`, dados);
    const novoNo = new No(nome, dados);

    if (!this.inicio) {
      this.inicio = novoNo;
      console.log(`🟢 Primeiro nó adicionado: "${nome}"`);
    } else {
      let atual = this.inicio;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
      console.log(`🟡 Nó "${nome}" adicionado ao final da lista.`);
    }
  }

  // Método para remover um nó com base no nome
  remover(nome) {
    console.log(`\n❌ Tentando remover o nó com nome: "${nome}"`);

    if (!this.inicio) {
      console.log("⚠️ Lista está vazia. Nada para remover.");
      return;
    }

    // Se o nó a ser removido é o primeiro
    if (this.inicio.nome === nome) {
      console.log(`✅ Nó "${nome}" removido (era o primeiro da lista).`);
      this.inicio = this.inicio.proximo;
      return;
    }

    // Percorrer a lista procurando o nó
    let atual = this.inicio;
    while (atual.proximo && atual.proximo.nome !== nome) {
      atual = atual.proximo;
    }

    if (atual.proximo) {
      console.log(`✅ Nó "${nome}" removido.`);
      atual.proximo = atual.proximo.proximo;
    } else {
      console.log(`❌ Nó "${nome}" não encontrado na lista.`);
    }
  }

  // Método para imprimir toda a lista
  imprimir() {
    console.log("\n📄 Imprimindo lista completa...");
    let atual = this.inicio;
    let contador = 1;

    if (!atual) {
      console.log("⚠️ Lista vazia.");
      return;
    }

    while (atual) {
      console.log(`\n🔹 Nó ${contador}`);
      console.log(`🔸 Nome: ${atual.nome}`);
      console.log("🔸 Dados:", atual.dados);
      atual = atual.proximo;
      contador++;
    }

    console.log("\n✅ Fim da impressão.\n");
  }
}

// ===============================
// TESTE
// ===============================

const lista = new ListaEncadeadaHeterogenea();

// Adicionando dados
lista.adicionar("Ana", { disciplinas: ["Matemática", "Biologia"] });
lista.adicionar("Luiz", [9.5, 8.0, 10.0]);
lista.adicionar("João", 12345);
lista.adicionar("Maria", "Aprovada");
lista.adicionar("Carlos", { idade: 25, curso: "Engenharia" });

// Imprimindo antes da remoção
lista.imprimir();

// Removendo um nome existente
lista.remover("João");

// Tentando remover um nome que não existe
lista.remover("Pedro");

// Removendo o primeiro nó
lista.remover("Ana");

// Imprimindo após remoções
lista.imprimir();
