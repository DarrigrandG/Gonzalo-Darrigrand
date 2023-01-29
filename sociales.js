//ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.acercacs', {delay: 500});
ScrollReveal().reveal('.experiencia', {delay: 500});
ScrollReveal().reveal('.proyectos-recientes', {delay: 500});
ScrollReveal().reveal('.articulos', {delay: 500});
ScrollReveal().reveal('.testimonios', {delay: 500});
ScrollReveal().reveal('.contacto', {delay: 500});
ScrollReveal().reveal('.pie', {delay: 500});


function mostrarComentarios() {
  var texto = document.getElementById("observaciones").value;
  if (texto.trim() == "") {
    alert("Por favor escriba en el área de texto");
  } else {
    console.log("Comentario: " + texto);
    alert("Gracias por su comentario, en breve recibirá una devolución.");
  }
}


