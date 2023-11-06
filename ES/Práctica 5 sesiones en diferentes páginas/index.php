<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica 5 sesiones diferentes páginas</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <!-- 
    En esta práctica voy a utilizar ambos metodos get y post en los diferentes formularios.
    En general, GET admite como máximo el envío de unos 500 bytes de información. 
    Otra gran limitación del método GET es que no permite el envío de archivos adjuntos con el formulario.
    A parte de todo esto los datos enviados mediante GET se ven en la barra de direcciones del navegador, mientras que con el post no ocurre esto.
    Además de lo anteriormente dicho existe una regla general que dice que el método GET se debe utilizar en los formularios que no modifican la información, 
    mientras que el POST en el caso contrario. 

    Dicho esto voy a utilizar post en el formulario de login para que no se muestren las credenciales introducizas en la ruta del navegador, 
    asi como en el formulario de insercción de datos en el fichero comentarios.txt siendo esto por privacidad además como anteriormente he comentado, se suele usar POST 
    como regla general si se modifica la información en el servidor.
    -->
    <div class="h-screen flex flex-col justify-center items-center bg-blue-100">
        <h1 class="mb-6 text-3xl">- FILE MENU -</h1>
        <div class="w-full sm:max-w-md py-4 px-6 bg-white shadow sm:rounded">
            <?php
            //iniciar sesión para acceder a las variables creadas al usar credenciales correctas en el login
            session_start();

            if (isset($_SESSION['iniciada']) && $_SESSION['user_id'] == "Admin") {
                // Usuario Admin está autenticado
                ?>
                <div class="flex items-center gap-4 justify-center mt-8">
                    <?php
                    // Imprime el nombre de usuario ademas de la fecha y hora almacenada en la variable de sesión
                    echo "User ".$_SESSION['user_id']." Loged at " . $_SESSION['login_time'];
                    ?>
                </div>
                <!-- formulario con el metodo get para imprimir el directorio actual -->
                <form action="index.php" method="get">
                    <div class="flex items-center gap-4 justify-center mt-8">
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="directorioactual" value="Show current directory" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                    <?php
                    //si se ha utilizado el formulario para mostrar el directorio actual
                    if (isset($_GET['directorioactual'])) {
                        //linea de texto para dar mas información
                        echo "El directorio actual es: <br>";
                        //codigo para mostrar la ruta actual
                        echo getcwd();
                    }
                    ?>
                </div>
                <!-- formulario con el metodo get para buscar los ficheros con el nombre indicado -->
                <form action="index.php" method="get">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                            name="fichero" />
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="search" value="Search file" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                    <?php
                    //si se ha utilizdo el formulario para buscar ficheros ejecuta el siguiente codigo
                    if (isset($_GET['search'])) {
                        //linea de texto para dar mas información
                        echo "Los ficheros que cumplen esos criterios son: <br>";
                        //foreach para mostrar todos los archivos que cumplan el regex de contener la palabra que le indicamos por el formulario
                        // al ser *(cualquier cosa), $_GET['fichero'] (parametro pasado por formulario) y de nuevo *(cualquier cosa)
                        foreach (glob("*" . $_GET['fichero'] . "*") as $filename) {
                            echo $filename . "<br>";
                        }
                    }
                    ?>
                </div>
                <!-- formulario con el metodo post agregar datos a un fichero -->
                <form action="index.php" method="POST">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <label class="text-sm text-gray-700">Leave a comment</label>
                        <input type="text" class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none'
                            name="comment" />
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="sendComment" value="Comment" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                    <?php
                    //si se utiliza el formulario para dejar comentarios
                    if (isset($_POST['sendComment'])) {
                        //recogemos las variables enviadas por el formulario
                        $comentario = $_POST['comment'];
                        //en lugar de pedir por formulario un nombre para crear un archivo voy a recoger los comentarios en un archivo como si fuera un log
                        // si quisieramos crear un archivo tendriamos que crear otro input en el formulario y sustituir comentarios.txt en fopen
                        // por la variable del formulario que recoga el nombre del archivo que queremos crear
                        //con a+ hacemos que se agrege al final del archivo (append)
                        $archivo = fopen("comentarios.txt", "a+");
                        //escribe en el archivo que hemos abierto el contenido enviado por formulario, 
                        //con PHP_EOL(end of line) hacemos un salto de linea en el documento para que tenga un orden visual
                        fwrite($archivo, $comentario . PHP_EOL);
                        //cierra el archivo para que no se pueda modificar
                        fclose($archivo);
                        //con esto mostramos el contenido del documento
                        $completo = file_get_contents("comentarios.txt");
                        //linea de texto para dar mas información
                        echo "La información del fichero comentarios es: <br>";
                        //imprimir el contenido almazenado en la variable con todo el documento
                        echo $completo;
                    }
                    ?>
                </div>
                <!-- formulario para logout y destruir la sesión actual -->
                <form method="post" action="logout.php">
                    <div class="flex items-center gap-4 justify-end mt-8">
                        <button type="submit" name="logout"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700">Log Out</button>
                    </div>
                </form>
                <?php
                //mismo funcionalidades anteriores sin embargo con Cliente1 no tenemos la funcionalidad de escribir ni crear archivos, solo se ejecutara esto si el usuario es Cliente1
            } elseif(isset($_SESSION['iniciada']) && $_SESSION['user_id'] == "Cliente1"){
                ?>
                <div class="flex items-center gap-4 justify-center mt-8">
                    <?php
                    // Imprime la fecha y hora almacenada en la variable de sesión
                    echo "User ".$_SESSION['user_id']." Loged at " . $_SESSION['login_time'];
                    ?>
                </div>
                <!-- formulario con el metodo get para imprimir el directorio actual -->
                <form action="index.php" method="get">
                    <div class="flex items-center gap-4 justify-center mt-8">
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="directorioactual" value="Show current directory" />
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
                <form action="index.php" method="get">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                            name="fichero" />
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="search" value="Search file" />
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
                <form action="index.php" method="POST">
                    <div class="flex flex-col items-center gap-4 justify-center mt-8">
                        <label class="text-sm text-gray-700">See comments</label>
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="sendComment" value="Comment" />
                    </div>
                </form>
                <div class="flex flex-col items-center gap-4 justify-center mt-8">
                    <?php
                    //si se utiliza el formulario para dejar comentarios
                    if (isset($_POST['sendComment'])) {
                        //IMPORTANTE EL FICHERO comentarios.txt DEBE EXISTIR PARA PODER ABRIRLO SI NO DARA FALLO
                        //como solo tiene permisos de lectura lo abrimo con r solo dandole solo esos permisos 
                        $archivo = fopen("comentarios.txt", "r");
                        //cerramos el fichero
                        fclose($archivo);
                        //con esto mostramos el contenido del documento
                        $completo = file_get_contents("comentarios.txt");
                        //linea de texto para dar mas información
                        echo "La información del fichero comentarios es: <br>";
                        //imprimir el contenido almazenado en la variable con todo el documento
                        echo $completo;
                    }
                    ?>
                </div>
                <form method="post" action="logout.php">
                    <div class="flex items-center gap-4 justify-end mt-8">
                        <button type="submit" name="logout"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700">Log Out</button>
                    </div>
                </form>
                <?php
            } else{
                // Si el usuario no esta registrado como ocurre con Admin o Cliente1 redirigira al login que esta en index.html
                // de esta forma no podran entrar en el sistema a traves de la ruta /index.php
                header("Location:index.html");
            }
            ?>




        </div>
    </div>
</body>

</html>