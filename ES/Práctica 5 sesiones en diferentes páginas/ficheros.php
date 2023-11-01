<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica 4 - Ficheros</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <div class="h-screen flex flex-col justify-center items-center bg-blue-100">
        <h1 class="mb-6 text-3xl">- FILE MENU -</h1>
        <div class="w-full sm:max-w-md py-4 px-6 bg-white shadow sm:rounded">
            <?php
            session_start();

            if (isset($_SESSION['iniciada']) && $_SESSION['iniciada'] == true) {
                // Usuario está autenticado
            ?>
                <!-- formulario con el metodo get para imprimir el directorio actual -->
                <form action="ficheros.php" method="get">
                    <div class="flex items-center gap-4 justify-center mt-8">
                        <input type="submit" class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700" name="directorioactual" value="Show current directory" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                <?php
                if (isset($_GET['directorioactual'])) {
                    echo "El directorio actual es: <br>";
                    echo getcwd();
                }
                ?>
                </div>
                <!-- formulario con el metodo get para buscar los ficheros con el nombre indicado -->
                <form action="ficheros.php" method="get">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="fichero" />
                        <input type="submit" class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700" name="search" value="Search file" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                <?php
                if (isset($_GET['search'])) {
                    echo "Los ficheros que cumplen esos criterios son: <br>";
                    foreach (glob("*" . $_GET['fichero'] . "*") as $filename) {
                        echo $filename . "<br>";
                    }
                }
                ?>
                </div>
                <!-- formulario con el metodo post agregar datos a un fichero -->
                <form action="ficheros.php" method="POST">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <label class="text-sm text-gray-700">Leave a comment</label>
                        <input type="text" class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' name="comment" />
                        <input type="submit" class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700" name="sendComment" value="Comment" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
            <?php
                if (isset($_POST['sendComment'])) {
                    $comentario = $_POST['comment'];
                    $archivo = fopen("comentarios.txt", "a+");
                    fwrite($archivo, $comentario . PHP_EOL);
                    fclose($archivo);
                    $completo = file_get_contents("comentarios.txt");
                    echo "La información del fichero comentarios es: <br>";
                    echo $completo;
                }
                ?>
                </div>
                <?php
            } else {
                // Usuario no está autenticado
                echo "<p>Debes iniciar sesión para acceder a esta página.</p>";
            }
            ?>




        </div>
    </div>
</body>

</html>