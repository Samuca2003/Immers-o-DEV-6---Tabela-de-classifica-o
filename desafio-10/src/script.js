var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

//elementoTabela.addEventListener("onload", exibirNaTela());

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, addNew) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${addNew})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${addNew})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${addNew})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${addNew})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${addNew})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}

function adicionarVitoria(addNew) {
  listaDeJogadores[addNew].vitoria++;
  listaDeJogadores[addNew].pontos = listaDeJogadores[addNew].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(addNew) {
  listaDeJogadores[addNew].empate++;
  listaDeJogadores[addNew].pontos++;
  exibirNaTela();
}

function adicionarDerrota(addNew) {
  listaDeJogadores[addNew].derrota++;
  exibirNaTela();
}

function limparPontuacaoJogador(addNew) {
  listaDeJogadores[addNew].vitoria = 0;
  listaDeJogadores[addNew].empate = 0;
  listaDeJogadores[addNew].derrota = 0;
  listaDeJogadores[addNew].pontos = 0;
  exibirNaTela();
}

function removerJogador(addNew) {
  listaDeJogadores.splice(addNew, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}
