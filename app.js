const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const mensagemInput = document.querySelector("#mensagem");


let botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", function(Event) {
    Event.preventDefault();

    let form = document.querySelector("#form");

    let nome = form.nome.value;
    let email = form.email.value;
    let assunto = form.assunto.value;
    let mensagem = form.mensagem.value;

    let erro = document.querySelector("#mensagem-erro");
    let envio = document.querySelector("mensagem-sucesso");

    function validarMensagem(mensagem) {
        if (nome.length == 0 || email.length == 0 || assunto.length == 0 || mensagem.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    if (!validarMensagem(mensagem)) {
        erro.innerHTML = "Necessário preenchimento de todos os campos!";
        return
    } else {
        erro.innerHTML = "";
        alert ("Mensagem enviada com sucesso!");
        form.reset();
    }   
})