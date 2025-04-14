document.addEventListener("DOMContentLoaded", function () {
    fetch('/rodape.html')
        .then(response => response.text())
        .then(data => document.getElementById('rodape-container').innerHTML = data)
        .catch(error => console.error('Erro ao carregar o roda pé:', error));
});