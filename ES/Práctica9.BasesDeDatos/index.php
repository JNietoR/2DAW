<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIGIMON. Práctica 9. Bases de datos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .fondo {
            background-image: url("https://i.pinimg.com/originals/cc/8c/5e/cc8c5e6e31019b7ced8c08d5ed4465f6.png");
        }
       body{
        background-color:#8b9aef;
       }
       #gif{
        width: 100px;
        height:100px;
       }
       #gif1{
        width: 110px;
        height:110px;
       }
       #logo{
        transform: scale(0.9);
       }
    </style>
</head>

<body>
    <div class="h-screen flex flex-col justify-center items-center fondo">
        <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Digimon_Logo.svg/1280px-Digimon_Logo.svg.png">
        <div class="py-4 px-6 fondoblanco sm:rounded" id="body">
            <?php
            //iniciar sesión para acceder a las variables creadas al usar credenciales correctas en el login
            session_start();
            if (isset($_SESSION['iniciada'])) {
                // Usuario Admin está autenticado
                ?>
                <div class="flex items-center gap-4 justify-center mt-8">
                <img id="gif" src="https://media0.giphy.com/media/eMy3TwSUHfRWRYSDSF/giphy.gif?cid=790b76116vccem0b6hlhy0a1fkf5taw3oi2stxoaid1kmzmm&ep=v1_gifs_search&rid=giphy.gif&ct=s">
                    </form>
                    <form method="post" action="logout.php">
                        <button type="submit" name="logout"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700">Log
                            Out</button>
                    </form>
                    <img id="gif1" src="https://media3.giphy.com/media/KgDpDFkGeLcIILj8A2/giphy.gif">
                </div>
                <?php
                // Establecer la conexión a la base de datos (reemplaza con tus propias credenciales)
                function conexionBBDD()
                {
                    $host = "localhost";
                    $user = "root";
                    $pass = "";
                    $db = "digimon";

                    // Crear conexión
                    $conexion = new mysqli($host, $user, $pass, $db);

                    // Verificar la conexión
                    if ($conexion->connect_error) {
                        die("Conexión fallida: " . $conexion->connect_error);
                    }
                    return $conexion;
                }
                $conexion = conexionBBDD();
                function cerrarConexionBBDD($conexion)
                {
                    // Cerrar la conexión a la base de datos
                    $conexion->close();
                }
                function imprimirTabla()
                {
                    $conexion = conexionBBDD();
                    $sqlquery = "SELECT * FROM digimons";
                    $resultado = $conexion->query($sqlquery);

                    // Verificar si la consulta se ejecutó bien
                    if (!$resultado) {
                        die("Error al ejecutar la consulta: " . $conexion->error);
                    }

                    // Construir la cadena HTML de la tabla
                    $tablaHTML = "<table class='mt-4' style='border:1px solid'>";
                    $tablaHTML .= "<tr>
                    <th class='bg-gray-100' style='min-width:50px;border:1px solid black'>Id</th>
                    <th class='bg-gray-100' style='min-width:220px;border:1px solid black'>Nombre</th>
                    <th class='bg-gray-100' style='min-width:220px;border:1px solid black'>Tipo</th>
                    <th class='bg-gray-100' style='border:1px solid black' colspan='2'>Acción</th>
                  </tr>";

                    // Agregar datos de cada fila a la cadena HTML
                    while ($row = $resultado->fetch_assoc()) {
                        $tablaHTML .= "<tr>
                        <td class='text-center bg-white' style='min-width:50px;border:1px solid black'>" . $row["id"] . "</td>
                        <td class='bg-white' style='min-width:220px;border:1px solid black'>" . $row["name"] . "</td>
                        <td class='bg-white' style='min-width:220px;border:1px solid black'>" . $row["type"] . "</td>
                        <td class='bg-white' style='min-width:100px;border:1px solid black'>
                            <form action='index.php' method='post' id='editarDigimon'>
                                <input type='hidden' name='digimon_id_editar' value='" . $row["id"] . "' />
                                <input type='hidden' name='digimon_name_editar' value='" . $row["name"] . "' />
                                <div class='flex items-center m-1 justify-center'>
                                    <input type='submit'
                                    class='px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700'
                                    name='EditarDigimon' value='Edit' />
                                </div>
                            </form>
                        </td>
                        <td class='bg-white' style='min-width:100px;border:1px solid black'>
                            <form action='index.php' method='POST' id='eliminarDigimon'>
                                <input type='hidden' name='digimon_id_eliminar' value='" . $row["id"] . "' />
                                <div class='flex items-center m-1 justify-center'>
                                    <input type='submit'
                                    class='px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700'
                                    name='EliminarDigimon' value='Delete' />
                                </div>
                            </form>
                        </td>
                      </tr>";
                    }

                    $tablaHTML .= "</table>";

                    // Cerrar la conexión a la base de datos
                    cerrarConexionBBDD($conexion);

                    // Devolver la cadena HTML de la tabla
                    return $tablaHTML;
                }
                if (isset($_POST['EliminarDigimon'])) {
                    $digimon_id_eliminar = $_POST['digimon_id_eliminar'];
                    conexionBBDD();
                    $conexion = conexionBBDD();

                    // Evitar inyección SQL utilizando una sentencia preparada
                    $sqlquery = "DELETE FROM digimons WHERE id = ?";

                    // Preparar statement de la consulta
                    $stmt = $conexion->prepare($sqlquery);

                    // asociar la id del digimon al statement
                    $stmt->bind_param("i", $digimon_id_eliminar);

                    // Ejecutar el statement
                    if ($stmt->execute()) {
                        echo "<h1 class='text-center m-2'>Digimon eliminado correctamente</h1>";
                    } else {
                        // si ocurre algún error
                        echo "Ha ocurrido un error con esta acción" . $stmt->error;
                    }
                    // Cerrar la declaración
                    $stmt->close();
                    cerrarConexionBBDD($conexion);
                }
                if (isset($_POST['InsertarDigimon'])) {
                    $name = $_POST['name'];
                    $type = $_POST['type'];
                    conexionBBDD();
                    $conexion = conexionBBDD();

                    // Evitar inyección SQL utilizando una sentencia preparada
                    $sqlquery = " INSERT INTO digimons (name, type) VALUES (?,?);";

                    // Preparar statement de la consulta
                    $stmt = $conexion->prepare($sqlquery);

                    // asociar la id del digimon al statement
                    $stmt->bind_param("ss", $name, $type);

                    // Ejecutar el statement
                    if ($stmt->execute()) {
                        echo "<h1 class='text-center m-2'>Digimon agregado correctamente</h1>";
                    } else {
                        // si ocurre algún error
                        echo "Ha ocurrido un error con esta acción" . $stmt->error;
                    }
                    // Cerrar la declaración
                    $stmt->close();
                    cerrarConexionBBDD($conexion);
                }
                ?>

                <form action="index.php" method="post" id="insertarDigimon">
                    <div class="flex items-center gap-4 justify-center mt-8">
                        <label class="text-sm text-gray-700 italic" for="name">Name</label>
                        <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                            name="name" />
                        <label class="text-sm text-gray-700 italic" for="type">Type</label>
                        <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                            name="type" />
                        <input type="submit"
                            class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                            name="InsertarDigimon" value="Insert Digimon" />
                    </div>
                </form>
                <?php
                if (isset($_POST['EditarDigimon'])) {
                    echo "<h1 class='mt-6 text-3xl text-center'>- Edit Digimon " . $_POST['digimon_name_editar'] . " with ID :" . $_POST['digimon_id_editar'] . " -</h1>";
                    ?>
                    <form action="index.php" method="post" id="modificarDigimon">
                        <div class="flex items-center gap-4 justify-center mt-8">
                            <label class="text-sm text-gray-700 italic" for="newname">New Name</label>
                            <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                                name="newname" />
                            <label class="text-sm text-gray-700 italic" for="newtype">New Type</label>
                            <input class='rounded shadow border border-gray-300 p-2 mt-1 w-full outline-none' type="text"
                                name="newtype" />
                            <input type="hidden" name="digimon_id_editar" value="<?php echo $_POST['digimon_id_editar']; ?>" />
                            <input type="submit"
                                class="px-4 py-2 bg-blue-800 rounded text-xs text-white uppercase hover:bg-blue-700"
                                name="modificarDigimon" value="Edit Digimon" />
                        </div>
                    </form>
                    <?php
                }

                if (isset($_POST['modificarDigimon'])) {
                    $name = $_POST['newname'];
                    $type = $_POST['newtype'];
                    $id = $_POST['digimon_id_editar'];
                    conexionBBDD();
                    $conexion = conexionBBDD();

                    // Evitar inyección SQL utilizando una sentencia preparada
                    $sqlquery = "UPDATE digimons SET name = ?, type= ? WHERE id = ?;";

                    // Preparar statement de la consulta
                    $stmt = $conexion->prepare($sqlquery);

                    // asociar la id del digimon al statement
                    $stmt->bind_param("ssi", $name, $type, $id);

                    // Ejecutar el statement
                    if ($stmt->execute()) {
                        echo "<h1 class='text-center m-2'>Digimon editado correctamente</h1>";
                    } else {
                        // si ocurre algún error
                        echo "Ha ocurrido un error con esta acción" . $stmt->error;
                    }

                    // Cerrar la declaración
                    $stmt->close();
                    cerrarConexionBBDD($conexion);
                }
                ?>
                <div id='tablaDatos'>
                    <?php
                    echo imprimirTabla();
                    ?>
                </div>
            </div>


            <?php
            } else {
                // Si el usuario no esta registrado como ocurre con Admin redirigira al login que esta en index.html
                // de esta forma no podran entrar en el sistema a traves de la ruta /index.php
                header("Location:index.html");
            }
            ?>
    </div>
</body>

</html>