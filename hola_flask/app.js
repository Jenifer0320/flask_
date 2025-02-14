function enviar(){
    var contenido = document.querySelector('#contenido');
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var v3 = document.querySelector('#t3').value;
    var url = "";

    // Determina cuál opción está seleccionada y asigna la URL correspondiente
    if (document.querySelector('#opcion1').checked)
        url = 'http://127.0.0.1:5000';
    else if (document.querySelector('#opcion2').checked)
        url = 'http://127.0.0.1:5000/notas/' + v1 + '/' + v2 + '/' + v3;
    else if (document.querySelector('#opcion3').checked)
        url = 'http://127.0.0.1:5000/edades/' + v1;
    else if (document.querySelector('#opcion4').checked)
        url = 'http://127.0.0.1:5000/arreglos/' + v1 + '/' + v2 + '/' + v3;
    else {
        swal("Mensaje", "Seleccione una opción", "warning");
        return;  // Detiene la ejecución si no se selecciona ninguna opción
    }

    // Realiza la solicitud fetch solo si se seleccionó una opción
    fetch(url)
        .then(function(response){
            if (response.ok){
                return response.text();
            } else {
                throw "Error en la llamada";
            }
        })
        .then(function(texto){
            console.log(texto);  // Imprime la respuesta en la consola
            contenido.innerHTML = texto;  // Muestra el texto en el HTML
        })
        .catch(function(error){
            console.log(error);
            swal({
                title: "Advertencia",
                text: error,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        });
}
