<template>
    <div class="text-white text-center">

        <h1 class="m-auto my-8 text-4xl max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-shadow-md">Sagas más famosas del Cosmere</h1>

        <!-- Archivo de las tormentas -->
        <details open class="flex flex-col items-center justify-center w-full">
            <summary
                class="mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900">
                Archivo de las tormentas
            </summary>
            <div class="flex flex-row justify-center items-center">
                <div v-for="(book, index) in stormlight" :key="index" class="flex flex-col items-center mx-4">
                    <a :href="book.link" target="_blank" rel="noopener noreferrer">
                        <img :src="book.portrait" alt="Portada del libro" class="w-100 md:w-50 lg:w-60 h-auto mb-2">
                    </a>
                </div>
            </div>
        </details>
        <!-- Fin Archivo de las tormentas -->

        <!-- Nacidos de la bruma -->
        <details open class="flex flex-col items-center justify-center w-full mt-8">
            <summary
                class="mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900">
                Nacidos de la bruma
            </summary>
            <div class="flex flex-row justify-center items-center">
                <div v-for="(book, index) in mistborn" :key="index" class="flex flex-col items-center mx-4">
                    <a :href="book.link" target="_blank" rel="noopener noreferrer">
                        <img :src="book.portrait" alt="Portada del libro"
                            class="w-full md:w-50 lg:w-60 h-auto mb-2 md:mb-0">
                    </a>
                </div>
            </div>
        </details>
        <!-- Fin Nacidos de la bruma -->

        <!-- Novelas secretas -->
        <details open class="flex flex-col items-center justify-center w-full mt-8">
            <summary
                class="mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900">
                Novelas secretas
            </summary>
            <div class="flex flex-row justify-center items-center">
                <div v-for="(book, index) in secretBooks" :key="index" class="flex flex-col items-center mx-4">
                    <a :href="book.link" target="_blank" rel="noopener noreferrer">
                        <img :src="book.portrait" alt="Portada del libro" class="w-100 md:w-50 lg:w-60 h-auto mb-2">
                    </a>
                </div>
            </div>
        </details>
        <!-- Fin Novelas secretas -->

    </div>
</template>
  
<script setup>

const stormlight = [
    { id: 1, title: 'El Camino de los Reyes', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=YhCYCgAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2GCkRAK4_3Yv14nACZOp-6fSoLkg&w=1280', link: 'https://www.google.es/books/edition/El_camino_de_los_reyes_El_Archivo_de_las/YhCYCgAAQBAJ?hl=es&gbpv=0' },
    { id: 2, title: 'Palabras Radiantes', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=8w-YCgAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2wwo0PyQyODY8e7Dx6T73V-HRUZw&w=1280', link: 'https://www.google.es/books/edition/El_camino_de_los_reyes/LcqipwAACAAJ?hl=es' },
    { id: 3, title: 'Juramentada', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=ucRODwAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U3um9SZV4FxKpPDR3wfgJTgOFTOtw&w=1280', link: 'https://www.google.es/books/edition/Juramentada_El_Archivo_de_las_Tormentas/ucRODwAAQBAJ?hl=es&gbpv=0' },
    { id: 4, title: 'El ritmo de la guerra', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=NFfuDwAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2NB9Qi-CBsN-rfMWX3ZXJuktLgsA&w=1280', link: 'https://www.google.es/books/edition/_/NFfuDwAAQBAJ?hl=es&gbpv=0' },

];
const mistborn = [
    { id: 1, title: 'El imperio final', author: 'Brandon Sanderson', portrait: 'https://m.media-amazon.com/images/I/911Ug7hsR4L._SL1500_.jpg', link: 'https://www.google.es/books/edition/El_imperio_final_The_Final_Empire/OF-REAAAQBAJ?hl=es' },
    { id: 2, title: 'El pozo de la ascensión', author: 'Brandon Sanderson', portrait: 'https://m.media-amazon.com/images/I/81r+t7Tdv-L._SL1500_.jpg', link: 'https://www.google.es/books/edition/Pack_El_Imperio_Final_El_Pozo_de_la_Asce/6kqgDwAAQBAJ?hl=es&gbpv=0' },
    { id: 3, title: 'El heróe de las eras', author: 'Brandon Sanderson', portrait: 'https://m.media-amazon.com/images/I/81c5VPXgDqL._SL1500_.jpg', link: 'https://www.google.es/books/edition/El_h%C3%A9roe_de_las_eras_The_Hero_of_Ages/4G-REAAAQBAJ?hl=es' },
    { id: 4, title: 'Alación de ley', author: 'Brandon Sanderson', portrait: 'https://m.media-amazon.com/images/I/81tA+z79OAL._SL1500_.jpg', link: 'https://books.google.es/books?id=Xd04AwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false' },


];
const secretBooks = [
    { id: 1, title: 'Trenza del mar esmeralda', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=hWSmEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2x28IZNHvJo4vBwg7rY5_v1ZxsTQ&w=1280', link: 'https://www.google.es/books/edition/Trenza_del_mar_Esmeralda/hWSmEAAAQBAJ?hl=es&gbpv=0' },
    { id: 2, title: 'Yumi y el pintor de pesadillas', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=DDHFEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3Z12PVoVwO0u-wpa6uXvdEV1XB5A&w=1280', link: 'https://www.google.es/books/edition/Yumi_y_el_pintor_de_pesadillas_Novela_Se/DDHFEAAAQBAJ?hl=es&gbpv=0' },
    { id: 3, title: 'El hombre iluminado', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=xn3aEAAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1SpgQokRJZn2BZXeFSf7NiHsG__w&w=1280', link: 'https://www.google.es/books/edition/El_Hombre_Iluminado/xn3aEAAAQBAJ?hl=es&gbpv=0' },
    { id: 3, title: 'Mago frugal', author: 'Brandon Sanderson', portrait: 'https://books.google.es/books/publisher/content?id=N0e3EAAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U0inXcDrskFIS-dXoNyyJfxKgo5sQ&w=1280', link: 'https://www.google.es/books/edition/La_gu%C3%ADa_del_mago_frugal_para_sobrevivir/N0e3EAAAQBAJ?hl=es&gbpv=0' },

];
</script>
<style scoped>
.text-shadow-md {
  text-shadow: 10px 10px 10px #b67600, -10px -10px 10px #b67600, 10px -10px 10px #b67600, -10px 10px 10px #b67600;
}
</style>