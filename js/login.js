const usuarioCorrecto = 'usuario';
const contrasenaCorrecta = 'contrasena';

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        // Redirigir a modificaciones_proveedores.html ESTO DEBE DE APUNTAR A LA PAGINA INDEX O A DONDE LO QUIERAS MANDAR
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}