const historicoMensagens = [{
    id: 1,
    usuario: "augusto",
    texto: "ola, tudo bem?"
}, {
    id: 2,
    usuario: "maria",
    texto: "iai"
}];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2) 
console.log(conteudoSalvar);


const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]'
const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try {
    JSON.parse(jsonQuebrado)
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}




