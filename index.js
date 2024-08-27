document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); // Evita el envío del formulario si hay campos vacíos
    }
});
