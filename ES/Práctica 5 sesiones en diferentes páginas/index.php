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
        header("Location: ficheros.php"); 
    } else {
        echo "<p>Credenciales incorrectos</p>";
    }
}
?>
