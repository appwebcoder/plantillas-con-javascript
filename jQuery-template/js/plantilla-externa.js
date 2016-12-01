/**
 * Created by ivan on 30/11/16.
 */
$("document").ready(function() {
    /* especificacion para el archivo platnilla-externa.html */
    // cargar la plantilla desde un archivo externo
    $('#contactos').loadTemplate('./plantillas/plantilla-contactos.html', [{
        "id": "1",
        "nombre": "Laura Hernandez",
        "telefono": "+54 11 15-2354-1111",
        "correo": "laura@hernandez.com",
        "titulo": "Administracion de Empresas",
        "tiempoCompleto": true
    }, {
        "id": "2",
        "nombre": "Alex Lopez",
        "telefono": "+54 11 15-2411-1111",
        "correo": "alex@lopez.com",
        "titulo": "Arquitecto",
        "tiempoCompleto": true
    }, {
        "id": "3",
        "nombre": "Fernando Gago",
        "telefono": "+54 11 15-2101-1111",
        "correo": "fernando@gago.com",
        "titulo": "Bombero",
        "tiempoCompleto": true
    }, {
        "id": "4",
        "nombre": "Kevin Baloo",
        "telefono": "+54 11 15-2510-0101",
        "correo": "kevin@baloo.com",
        "titulo": "Programador coder",
        "tiempoCompleto": true
    }], {
        ifFile: true // indica al plugin la plantilla se va a cargar desde el archivo externo
    });

    $.addTemplateFormatter("UpperCase",
        function (value, options) {
            return value.toUpperCase();
        });
});