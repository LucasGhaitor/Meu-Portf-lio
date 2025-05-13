// script.js

// Adiciona uma função ao formulário para mostrar mensagem de sucesso
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const mensagemEnviada = document.getElementById("mensagem-enviada");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // impede o envio real
            mensagemEnviada.style.display = "block";

            // Limpa os campos do formulário (simulação de envio)
            form.reset();

            // Esconde a mensagem após 4 segundos
            setTimeout(() => {
                mensagemEnviada.style.display = "none";
            }, 4000);
        });
    }
});
