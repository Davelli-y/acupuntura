// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Simulação de ação no CTA
  document.getElementById('btn-agendar')?.addEventListener('click', () => {
    alert('Obrigado pelo interesse! Em breve entraremos em contato para agendar.');
  });
  