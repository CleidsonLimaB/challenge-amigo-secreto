//Criar uma lista vazia.
let participantes = [];
//Adicionar participantes.
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        input.value = ''; // Limpar o campo de texto.
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}
//função para atualizar a lista na tela.
function atualizarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpar a Lista Antes de Atualizar.

    participantes.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });    
}

//função de sorteio.
function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Adicione pelo menos 1 participante para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * participantes.length);
    let nomeSorteado = participantes[indiceSorteado];

    exibirResultado(nomeSorteado);
}

//função para exibir o resultado do sorteio.

function exibirResultado(nome) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🔹 Nome Sorteado: <strong>${nome}</strong></li>`;
}


//Função Remover um nome específico da Lista.

function removerAmigo() {
    if (participantes.length === 0) {
        alert("A lista está vazia!");
        return;
    }

    let nomeParaRemover = prompt("Digite o nome que deseja remover:").trim();

    if (!nomeParaRemover) {
        alert("Nome inválido!");
        return;
    }

    let index = participantes.indexOf(nomeParaRemover);

    if (index !== -1) {
        participantes.splice(index, 1);
        atualizarLista();
        alert(`"${nomeParaRemover}" foi removido.`);
    } else {
        alert("Nome não encontrado na lista.");
    }
}


//Função para reiniciar a lista.

function reiniciarLista() {
    if (participantes.length === 0) {
        alert("A lista já está vazia!");
        return;
    }

    let confirmar = confirm("Tem certeza que deseja reiniciar a lista?");
    if (confirmar) {
        participantes = [];
        atualizarLista();
        document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
        alert("Lista reiniciada!");
    }
}
