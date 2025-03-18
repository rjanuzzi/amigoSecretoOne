//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let meusAmigos = []; // Array que irá armazenar os amigos 
//adicionarAmigo(); // Chama a função adicionarAmigo
let campoDoNome; // Variável que irá armazenar o valor do input

function adicionarAmigo() { // Função que irá adicionar os amigos no array
    let campoDoNome = document.querySelector('input').value; // Pega o valor do input
    
    meusAmigos.push(campoDoNome); // Adiciona o valor do input no array
    if(campoDoNome == '') { // Verifica se o campo está vazio
        alert("Por favor, insira um nome."); // Exibe um alert
        return; // Retorna para não executar o resto do código
    } else {    
        console.log("Amigo" + meusAmigos + "adicionado com sucesso!"); // Exibe o array no console

        limparCampo(); // Chama a função limparCampo para limpar o campo do input

        lista(); // Chama a função lista para exibir a lista de amigos
        
    }    
    
}

function limparCampo() {
    campoDoNome = document.querySelector('input').value = ''; // Limpa o campo do input
}


function lista() { // Função que irá exibir a lista de amigos
    let campoLista = document.getElementById('listaAmigos'); // Pega o campo onde a lista será exibida
    campoLista.innerHTML = ''; // Limpa o campo

    
    for (let i = 0; i < meusAmigos.length; i++) { // Loop que irá percorrer o array e exibir os amigos 
        let novoAmigoLista = document.createElement('li'); // Cria um novo elemento li 
        novoAmigoLista.textContent = meusAmigos[i]; // Adiciona o nome do amigo no elemento li 
        campoLista.appendChild(novoAmigoLista); // Adiciona o elemento li na lista de amigos 
    }
    
}

function nomeAleatorio() {
    if(meusAmigos.length == ''){
        adicionarAmigo();
    } else {
        let numeroAleatorio = Math.floor(Math.random() * meusAmigos.length);
        let amigoAleatorio = meusAmigos[numeroAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        resultado.textContent = amigoAleatorio;
    }
}
function sortearAmigo() {
    nomeAleatorio();
}