
  // Menu Hamburger
document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
hamburger.innerHTML = navMenu.classList.contains('active')
  ? '<i class="fas fa-times"></i>'
  : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-item a').forEach(link => {
link.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});
});

// Header ao rolar
window.addEventListener('scroll', () => {
const header = document.getElementById('header');
if (window.scrollY > 100) {
  header.style.padding = '10px 0';
  header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
} else {
  header.style.padding = '20px 0';
  header.style.backgroundColor = 'black'; // ou var(--primary-color)
}
});
});

    // Enviar mensagem para WhatsApp
    function sendWhatsApp(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const text = `Olá, sou ${name}. E-mail: ${email}. Telefone: ${phone}. ${message}`;
        const encodedText = encodeURIComponent(text);
        
        window.open(`https://wa.me/5511963291060?text=${encodedText}`, '_blank');
        
        document.getElementById('contactForm').reset();
    }