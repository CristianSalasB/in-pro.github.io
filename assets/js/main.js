// Detectar el scroll para ocultar o mostrar el cuadro de WhatsApp
window.addEventListener('scroll', function() {
    const whatsappCard = document.getElementById('whatsappCard');
    const contactSection = document.getElementById('contact');
    const contactPosition = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (contactPosition <= screenHeight) {
      whatsappCard.classList.add('hidden');
    } else {
      whatsappCard.classList.remove('hidden');
    }
    
});