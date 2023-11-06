<?php
//Comprueba si le has dado al submit del formulario login con metodo post
if (isset($_POST['login'])) {
    //almadena las variables del formulario login
    $user = $_POST["user"];
    $password = $_POST["password"];

    //inicialización de las variables de la base de datos
    $host = "localhost";
    $usuario = "root";
    $pass = "";

    //crea la conexion usando la dirección usuario y contraseña de la base de datos si no coinciden cierra la conexion
    $conexion = mysqli_connect($host, $usuario, $pass) or die("Error de conexión");
    //realiza una conexion a la base de datos llamada usuarios
    mysqli_select_db($conexion, "usuarios");
    //query para comprobar que existe el usuario con su contraseña en la base de datos
    $consultar = "SELECT * FROM users WHERE user='$user' AND password='$password'";
    //realiza la query en la base de datos
    $resultado = mysqli_query($conexion, $consultar);
    //cierra la conexión despues de realizarla
    mysqli_close($conexion);

    //si encuentra una coincidencia inicia la sesión y crea las variables de sesión que vamos a utilizar
    if (mysqli_num_rows($resultado) > 0) {
        //inicia la sesión
        session_start();
        //inicializa las variables de los datos que deseamos guardar
        $_SESSION['iniciada'] = true;
        $_SESSION['user_id']= $user;
        //Guarda la fecha y hora de la conexión si no existe
        if (!isset($_SESSION['login_time'])) {
            $_SESSION['login_time'] = date('l jS \of F Y h:i:s A');
        }
        //redirecciona al index donde estan todas las funciones de los ficheros
        header("Location: index.php"); 
        //Si no ha encontrado coincidencia con el query sql redirecióna al index.html donde esta formulario de login
    } else {
        header("Location: index.html");
    }
}
?>
