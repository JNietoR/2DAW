<?php
if (isset($_GET['item'])) {
    $item = $_GET['item'];
    switch ($item) {
        case 0:
            $titulo = "Nacidos de la Bruma: El Imperio Final";
            $descripcion = "Nacidos de la Bruma: El Imperio Final (también conocido como El Imperio Final) es el primer volumen de la primera trilogía de los Nacidos de la Bruma escrita por Brandon Sanderson. Fue publicado en el año 2006 y contó con dos secuelas: Nacidos de la Bruma: El pozo de la ascensión y Nacidos de la Bruma: El héroe de las eras
            La trama del libro trata sobre una pequeña banda de ladrones que desarrolla un plan para robarle un valioso tesoro a un dictador inmortal que ha vivido por más de mil años usando una magia conocida como Alomancia. ";
            $portada = "https://books.google.es/books/publisher/content?id=xKk4AwAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1VEl36I200TBcyiqXBjSP1_VSBIg&w=1280";

            // Generar HTML con la información del libro
            echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
            break;
            case 1:
                $titulo ="Nacidos de la Bruma: El pozo de la Ascension";
                $descripcion =" El Pozo de la Ascensión es el segundo volumen de la saga  «Nacidos de la Bruma [Mistborn]», una obra iniciada conEl imperio final y  parte imprescindible del Cosmere, el universo destinado a  dar forma a la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica.";
                $portada ="https://books.google.es/books/publisher/content?id=-684AwAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1d1ZKvQHKyMRm7GCYk-RqbNmpjGQ&w=1280 ";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 2:
                $titulo =" Nacidos de la Bruma: El heroe de las eras";
                $descripcion ="El Héroe de las Eras es el tercer volumen de la saga «Nacidos  de la Bruma (Mistborn)». Una obra iniciada conEl imperio final y parte imprescindible del Cosmere, el universo destinado a dar forma a la serie más extensa y fascinante jamás escrita  en el ámbito de la fantasía épica.";
                $portada = "https://m.media-amazon.com/images/I/81c5VPXgDqL._AC_UF894,1000_QL80_.jpg";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 3:
                $titulo="Archivo de las Tormentas: El camino de los reyes";
                $descripcion ="El camino de los reyes es el primer volumen de «El Archivo de  las Tormentas», el resultado de más de una década de construcción y  escritura de universos, convertido en una obra maestra de la fantasía  contemporánea en diez volúmenes. Con ella, Brandon Sanderson se postula  como el autor del género que más lectores está ganando en todo el mundo.";
                $portada ="https://books.google.es/books/publisher/content?id=YhCYCgAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2GCkRAK4_3Yv14nACZOp-6fSoLkg&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 4:
                $titulo="Archivo de las Tormentas: Palabras Radiantes";
                $descripcion="La aclamada continuación deEl camino de los reyes es, como el  primer volumen de «El Archivo de las Tormentas», el resultado de más de  una década de construcción y escritura de universos, convertida en una  obra maestra de la fantasía contemporánea en diez volúmenes. Brandon  Sanderson se postula con ella como el autor del género que más lectores está ganando en todo el mundo.";
                $portada ="https://books.google.es/books/publisher/content?id=8w-YCgAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2wwo0PyQyODY8e7Dx6T73V-HRUZw&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 5:
                $titulo="Archivo de las Tormentas: Juramentada";
                $descripcion = "Juramentada es la aclamada continuación deEl camino de los reyes y dePalabras radiantes, y tercera parte de la decalogía  «El Archivo de las Tormentas», obra maestra de la fantasía épica que ha coronado la lista debest sellers deThe New York Times y ha  postulado a Sanderson como el autor de género que más lectores está ganando en todo el mundo.";
                $portada ="https://books.google.es/books/publisher/content?id=ucRODwAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U3um9SZV4FxKpPDR3wfgJTgOFTOtw&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 6:
                $titulo="Archivo de las Tormentas: El ritmo de la guerra";
                $descripcion ="El Ritmo de la Guerraes la esperada cuarta parte de la  decalogía «El Archivo de las Tormentas» y el libro que continúa la historia deEl camino de los reyes, Palabras radiantesyJuramentada.";
                $portada ="https://books.google.es/books/publisher/content?id=NFfuDwAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2NB9Qi-CBsN-rfMWX3ZXJuktLgsA&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 7:
                $titulo = "Elantris";
                $descripcion="Una novela imprescindible para los amantes de la fantasía épica. Por  el consagrado autor del género Brandon Sanderson.

                «La más bella novela de fantasía que se escribirá en muchos años.»
                Orson Scott Card, autor de El juego de Ender";
                $portada ="https://books.google.es/books/publisher/content?id=JFbWCwAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U08KkRftFSz_KZkYOch62jxlYgqUw&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 8:
                $titulo = "Yumi y el pinto de las pesadillas";
                $descripcion= "Brandon Sanderson añade a su universo del Cosmere (compartido por las sagas Nacidos de la Bruma y El Archivo de las Tormentas) una nueva novela independiente que hará las delicias de los aficionados a la cultura popular asiática.";
                $portada ="https://books.google.es/books/publisher/content?id=DDHFEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3Z12PVoVwO0u-wpa6uXvdEV1XB5A&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 9:
                $titulo = "El hombre iluminado";
                $descripcion ="Brandon Sanderson, el gran autor de fantasía del siglo XXI, nos lleva a un futuro de su universo del Cosmere en el que un perpetuo vagabundo planetario deberá decidir si seguir huyendo o quedarse y ayudar en un mundo atribulado.";
                $portada ="https://books.google.es/books/publisher/content?id=xn3aEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1SpgQokRJZn2BZXeFSf7NiHsG__w&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 10:
                $titulo =" Trenza del mar esmeralda";
                $descripcion ="Vuelve al universo del Cosmere con una aventura divertida y cautivadora que encantará a los fans de La princesa prometida.";
                $portada="https://books.google.es/books/publisher/content?id=hWSmEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2x28IZNHvJo4vBwg7rY5_v1ZxsTQ&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
            case 11:
                $titulo = "La guia del mago frugal para sobrevir en el inglaterra del medievo";
                $descripcion ="La fascinante aventura de un mago amnésico enfrentado a las diabluras de un viaje en el tiempo.";
                $portada="https://books.google.es/books/publisher/content?id=N0e3EAAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U0inXcDrskFIS-dXoNyyJfxKgo5sQ&w=1280";
                echo "<div class='row'>
                        <div class='col-4'>
                            <img src=' $portada ' class='card-img-top' alt='Portada libro'>
                        </div>
                        <div class='col-8 w-50 text-white'>
                            <h2>$titulo</h2>
                            <span>$descripcion</span>
                        </div>
                    </div>";
                break;
        default:
            echo "Item no reconocido";
            break;
    }
} else {
    echo "Parámetro 'item' no proporcionado";
}
?>