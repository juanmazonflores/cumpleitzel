//MENSAJE DE ADVERTENCIA

function mostrarMensajeInicial() {

    if (confirm('Bienvenido a mi sitio')) {
      alert('¡Gracias por visitarnos!');
    } else {
      alert('...');
    }
  
  }


// BOTON ARRIBA

document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  });

});

// MENSAJE 

const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - Nombre: ' + nombre + '- Email: ' + email + '- Mensaje: ' + mensaje);

  contactoForm.reset();
});
