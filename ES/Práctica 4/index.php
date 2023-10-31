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
            - FILE MENU -
        </h1>
        <div class="w-full sm:max-w-md py-4 px-6 bg-white shadow sm:rounded">
            <?php
            //array con las crecenciales para poder entrar al menu de ficheros
            $credenciales = array('user' => 'Admin', 'password' => '1234');
            //si hemos enviado mediante el formulario con metodo get mediante el input "directorioactual" imprimira por pantalla el directorio en el que nos encontramos
            if (isset($_GET['directorioactual'])) {
                echo getcwd();
            }
            //si hemos enviado datos mediante el formulario con metodo get mediante el input "search" imprimira por pantalla todos los ficheros que cumplan con el patron
            if (isset($_GET['search'])) {
                //imprime por pantalla los ficheros que cumplan con la busqueda
                foreach (glob("*" .$_GET['fichero']. "*") as $filename) {
                    echo $filename . "<br>";
                }
            }
            //si hemos enviado datos mediante el formulario con metodo get mediante el input "sendComment" escribira en el fichero la información que hemos indicado
            if (isset($_GET['sendComment'])) {
                $comentario = $_GET['comment'];
                //con a+ agregara al final del fichero si queremos que se sobreescriba cada vez que escribimos podemos utilizar w+
                $archivo=fopen("comentarios.txt","a+");
                //escribimos en el fichero que hemos almacenado en la variable anterior agregando un salto de linea al final de la introducción
                fwrite($archivo,$comentario. PHP_EOL);
                //cerramos el fichero
                fclose($archivo);
                //alamacena el contenido del fichero para imprimirlo 
                $completo=file_get_contents("comentarios.txt");
                //imprime el fichero en html
                echo $completo;
            }
            //comprueba que se han enviado datos mediante el formulario con el metodo post mediante el input "login"
            if (isset($_POST['login'])) {
                //compara los datos enviados con los almacenados en el array declarado anteriormente
                if ($_POST['user'] == $credenciales['user'] && $_POST['password'] == $credenciales['password']) {
                    //imprime por pantalla la fecha y hora en la que ha entrado en el sistema
                    echo date('l jS \of F Y h:i:s A');
                    ?>
                    <!-- formulario con el metodo get para imprimir el directorio actual -->
                    <form action="index.php" method="get">
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="directorioactual" value="Mostrar directorio actual" />
                        </div>
                    </form>
                    <!-- formulario con el metodo get para buscar los ficheros con el nombre indicado -->
                    <form action="index.php" method="get">
                        <div class="flex flex-col items-center gap-4 justify-center mt-8">
                            <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                                name="fichero" />
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="search" value="Buscar fichero" />
                        </div>
                    </form>
                    <!-- formulario con el metodo get agregar datos a un fichero -->
                    <form action="index.php" method="get">
                        <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <label class="text-sm text-gray-700">Deja un comentario</label>
                            <input type="text" class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none'
                                name="comment" />
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="sendComment" value="Dejar comentario" />
                        </div>
                    </form>
                    <?php
                    //si la comparación de datos falla imprimira un mensaje de error por pantalla
                } else {
                    echo "Credencdiales incorrectas";
                }
            }
            ?>
        </div>
    </div>
</body>

</html>