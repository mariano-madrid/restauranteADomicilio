// Espera a que todo el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // Obtener el formulario y el mensaje de confirmación
    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Añadir un event listener para el envío del formulario
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Validar si todos los campos están completos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const orderDetails = document.getElementById('order-details').value;

        if (name && email && phone && orderDetails) {
            // Mostrar mensaje de confirmación
            confirmationMessage.style.display = 'block';
            // Limpiar el formulario
            orderForm.reset();
        } else {
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });

});
