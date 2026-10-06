document.getElementById('formContacto').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();

  
  if (!email.includes('@') || !email.includes('.')) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

 
  document.getElementById('modalExito').classList.add('activo');

 
  this.reset();
});


document.getElementById('btnVolver').addEventListener('click', function() {
  document.getElementById('modalExito').classList.remove('activo');
});