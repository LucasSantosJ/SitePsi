document.addEventListener("DOMContentLoaded", function () {
    fetch('/menu.html')
        .then(response => response.text())
        .then(data => document.getElementById('menu').innerHTML = data)
        .catch(error => console.error('Erro ao carregar o menu:', error));
});

function abrirWhatsApp(servico) {
        let numero = "5582987729579"; 
        let mensagem = encodeURIComponent(`Olá, gostaria de agendar uma consulta para ${servico}. Poderia me passar mais informações?`);
        let link = `https://wa.me/${numero}?text=${mensagem}`;
        window.open(link, "_blank");
 }

 function abrirInstagram() {
    const url = "https://www.instagram.com/psicologajacy/?igsh=cHMyamxjN2QxYmNz&utm_source=qr#"; 
    window.open(url, "_blank");
}
