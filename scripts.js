document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato! Responderemos em breve.');
    });
});
