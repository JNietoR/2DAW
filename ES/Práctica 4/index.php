<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica 4</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <div class="h-screen flex flex-col justify-center items-center bg-blue-100">
        <h1 class="mb-6 text-3xl">
            File menu
        </h1>
        <div class="w-full sm:max-w-md py-4 px-6 bg-white shadow sm:rounded">
            <?php
            $credenciales = array('user' => 'Admin', 'password' => '1234');
            if (isset($_GET['directorioactual'])) {
                echo getcwd();
            }
            if (isset($_GET['search'])) {
                $fichero = $_GET['fichero'];
                foreach (glob("*" . $fichero . "*") as $filename) {
                    echo $filename . "<br>";
                }
            }
            if (isset($_GET['sendComment'])) {
                $comentario = $_GET['comment'];
                $archivo=fopen("comentarios.txt","w+");
                fwrite($archivo,$comentario);

                $completo=file_get_contents("comentarios.txt");
                echo $completo;
            }
            if (isset($_POST['login'])) {
                if ($_POST['user'] == $credenciales['user'] && $_POST['password'] == $credenciales['password']) {
                    echo date('l jS \of F Y h:i:s A');
                    ?>
                    <form action="index.php" method="get">
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input type="hidden" name="loginOk" />
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="directorioactual" value="Mostrar directorio actual" />
                        </div>
                    </form>
                    <form action="index.php" method="get">
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                                name="fichero" />
                        </div>
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="search" value="Buscar fichero" />
                        </div>
                    </form>
                    <form action="index.php" method="get">
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input type="text" class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none'
                                name="comment" />
                        </div>
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="sendComment" value="Dejar comentario" />
                        </div>
                    </form>
                    <?php
                } else {
                    echo "Credencdiales incorrectas";
                }
            }
            ?>
        </div>
    </div>
</body>

</html>