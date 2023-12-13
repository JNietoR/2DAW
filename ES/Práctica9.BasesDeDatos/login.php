<?php
// Comprueba si se ha enviado el formulario de login mediante el método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    // Almacena las variables del formulario de login
    $user = $_POST["username"];
    $password = $_POST["password"];

    // Variables de la base de datos
    $host = "localhost";
    $usuario = "root";
    $pass = "";
    $db = "digimon";

    // Intenta establecer la conexión a la base de datos
    try {
        $conexion = new mysqli($host, $usuario, $pass, $db);

        if ($conexion->connect_error) {
            die("Error de conexión: " . $conexion->connect_error);
        }

        // Query con prepared statement para evitar inyecciones SQL
        $consultar = "SELECT * FROM users WHERE username=? AND password=?";
        $stmt = $conexion->prepare($consultar);

        // Vincula los parámetros al statement
        $stmt->bind_param("ss", $user, $password);

        // Ejecuta la consulta
        $stmt->execute();

        // Obtiene el resultado de la consulta
        $resultado = $stmt->get_result();

        // Si encuentra una coincidencia, inicia la sesión y redirige al index.php
        if ($resultado->num_rows > 0) {
            session_start();
            $_SESSION['iniciada'] = true;
            $_SESSION['user_id'] = $user;
            header("Location: index.php");
        } else {
            // Si no hay coincidencia, redirige al index.html
            header("Location: index.html");
        }
    } catch (Exception $e) {
        // En caso de error en la conexión o consulta
        die("Error: " . $e->getMessage());
    } finally {
        // Cierra la conexión y el statement para mas seguridad
        $stmt->close();
        $conexion->close();
    }
}
?>
