window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar); // ativa no carregamento também

document.addEventListener("DOMContentLoaded", function() {
  // Carrega o menu
  fetch('menu.html')
      .then(response => {
          if (!response.ok) throw new Error("Falha ao carregar o menu");
          return response.text();
      })
      .then(data => {
          // Insere o menu no início do body
          document.body.insertAdjacentHTML('afterbegin', data);
          
          // Seleciona os elementos
          const hamburger = document.getElementById('hamburger');
          const menu = document.getElementById('menu');
          
          if (hamburger && menu) {
              // Função para alternar menu
              const toggleMenu = () => {
                  menu.classList.toggle('ativo');
                  hamburger.classList.toggle('ativo');
                  
                  // Trava/destrava scroll
                  document.body.style.overflow = menu.classList.contains('ativo') ? 'hidden' : 'auto';
              };
              
              // Evento de clique
              hamburger.addEventListener('click', toggleMenu);
              
              // Fecha menu ao clicar nos links
              document.querySelectorAll('.menu a').forEach(link => {
                  link.addEventListener('click', () => {
                      menu.classList.remove('ativo');
                      hamburger.classList.remove('ativo');
                      document.body.style.overflow = 'auto';
                  });
              });
          }
      })
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


function revelarAoRolar() {
  const elementos = document.querySelectorAll('.scroll-reveal');
  const topoTela = window.innerHeight;

  elementos.forEach(el => {
    const distanciaTopo = el.getBoundingClientRect().top;

    if (distanciaTopo < topoTela - 100) {
      el.classList.add('mostrado');
    }
  });
}



  

