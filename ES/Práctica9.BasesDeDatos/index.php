<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica 5 sesiones diferentes páginas</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="h-screen flex flex-col justify-center items-center bg-blue-100">
        <h1 class="mb-6 text-3xl">- Digimon -</h1>
        <div class="py-4 px-6 bg-white shadow sm:rounded">
            <?php
            //iniciar sesión para acceder a las variables creadas al usar credenciales correctas en el login
            session_start();
            if (isset($_SESSION['iniciada'])) {
                // Usuario Admin está autenticado
                ?>
                <div class="flex items-center gap-4 justify-center mt-8">
                    <?php
                    // Imprime el nombre de usuario ademas de la fecha y hora almacenada en la variable de sesión
                    echo "Welcome user " . $_SESSION['user_id'];
                    ?>
                    </form>
                <form method="post" action="logout.php">

                    <button type="submit" name="logout"
                        class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700">Log
                        Out</button>
            </form>
                </div>
                <form action="index.php" method="get">
                    <div class="flex items-center gap-4 justify-center mt-8">
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="obtenerDigimon" value="Mostrar Digimon" />
                    </div>
                </form>
                <form action="index.php" method="post">
                    <div class="flex items-center gap-4 justify-center mt-8">
                    <label class="text-sm text-gray-700 italic" for="name">Name</label>
                    <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="name"/>
                    <label class="text-sm text-gray-700 italic" for="type">Type</label>
                    <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="type"/>
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="CrearDigimon" value="Insertar Digimon" />
                    </div>
            </form>
            <form action="index.php" method="post">
                    <div class="flex items-center gap-4 justify-center mt-8">
                    <label class="text-sm text-gray-700 italic" for="name">Name</label>
                    <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="name"/>
                    <label class="text-sm text-gray-700 italic" for="type">Type</label>
                    <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="type"/>
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="ModificarDigimon" value="Modificar Digimon" />
                    </div>
            </form>
            <form action="index.php" method="post">
                    <div class="flex items-center gap-4 justify-center mt-8">
                    <label class="text-sm text-gray-700 italic" for="name">Name</label>
                    <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text" name="name"/>
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="EliminarDigimon" value="Eliminar Digimon" />
                    </div>
            </form>
                <form method="post" action="logout.php">
                <div class="flex items-center gap-4 justify-end mt-8">
                    <button type="submit" name="logout"
                        class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700">Log
                        Out</button>
                </div>
            </form>
            </div>
            
            
            <?php
                //mismo funcionalidades anteriores sin embargo con Cliente1 no tenemos la funcionalidad de escribir ni crear archivos, solo se ejecutara esto si el usuario es Cliente1
            } else {
                // Si el usuario no esta registrado como ocurre con Admin o Cliente1 redirigira al login que esta en index.html
                // de esta forma no podran entrar en el sistema a traves de la ruta /index.php
                header("Location:index.html");
            }
            ?>
    </div>
</body>

</html>