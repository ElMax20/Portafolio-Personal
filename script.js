document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    const mainTitle = document.querySelector('#inicio h1');
    const newTitle = "¡Bienvenido a mi Portafolio!";
    
    setTimeout(() => {
        mainTitle.textContent = newTitle;
    }, 2000);
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Por favor, completa todos los campos.';
            formMessage.classList.remove('hidden');
        } else {
            formMessage.textContent = 'Mensaje enviado. ¡Gracias por contactarme!';
            formMessage.classList.remove('hidden');
            formMessage.classList.add('text-green-500'); // Estilo de éxito
            contactForm.reset();
        }
    });
});

