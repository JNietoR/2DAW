<?php
if (isset($_POST['login'])) {
    $user = $_POST["user"];
    $password = $_POST["password"];

    $host = "localhost";
    $usuario = "root";
    $pass = "";

    $conexion = mysqli_connect($host, $usuario, $pass) or die("Error de conexión");
    mysqli_select_db($conexion, "usuarios");
    $consultar = "SELECT * FROM users WHERE user='$user' AND password='$password'";
    $resultado = mysqli_query($conexion, $consultar);
    mysqli_close($conexion);

    if (mysqli_num_rows($resultado) > 0) {
        session_start();
        $_SESSION['iniciada'] = true;
        if (!isset($_SESSION['login_time'])) {
            // Si no se ha registrado, establece la fecha y hora actual
            $_SESSION['login_time'] = date('l jS \of F Y h:i:s A');
        }
        header("Location: ficheros.php"); 
    } else {
        echo "<p>Credenciales incorrectos</p>";
    }
}
?>
