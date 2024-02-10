<template>
    <div>
      <div id="bookForm-container" class="flex flex-col items-center justify-center w-full">
        <h1 class="m-auto my-8 text-4xl shadow-2xl shadow-black w-120">Gestiona el estado de tus libros</h1>
  
        <!-- Formulario para introducir libros en leído o pendiente usando v-if, v-else, v-for, v-model y v-bind -->
        <div id="form-container">
          <input v-model="bookName" type="text" name="bookName" id="bookName" class="text-black p-2 m-2">
          <div id="button-form-container">
            <button @click="saveBook('readedBooks')"
              class="w-full border border-orange-300 hover:border-gray-500 cursor-pointer bg-gray-900 p-2 m-2">Guardar en
              leídos</button>
            <button @click="saveBook('pendantBooks')"
              class="w-full border border-orange-300 hover:border-gray-500 cursor-pointer bg-gray-900 p-2 m-2">Guardar en
              pendientes</button>
          </div>
        </div>
        <!-- Fin formulario -->
  
        <!-- Details de libros pendientes -->
        <details v-if="readedBooks.length > 0" class="flex flex-col items-center justify-center w-full">
          <summary
            v-bind:class="{ 'mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900': true }">
            {{ `Has leido ${readedBooks.length} libro/s` }}
          </summary>
          <div class="flex flex-col justify-center items-center">
            <div v-for="(book, index) in readedBooks" :key="index" class="flex flex-col items-center mx-4">
              <span class="mb-4">Genial has terminado <b>{{ book.title }}</b>.</span>
            </div>
          </div>
        </details>
        <details v-else class="flex flex-col items-center justify-center w-full">
          <summary
            v-bind:class="{ 'mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900': true }">
            No has leido ningún libro
          </summary>
        </details>
        <!-- Fin details pendientes -->

        <!-- Details de libros pendientes -->
        <details v-if="pendantBooks.length > 0" class="flex flex-col items-center justify-center w-full">
          <summary
            v-bind:class="{ 'mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900': true }">
            {{ `Tienes ${pendantBooks.length} libros pendiente/s` }}
          </summary>
          <div class="flex flex-col justify-center items-center">
            <div v-for="(book, index) in pendantBooks" :key="index" class="flex flex-col items-center mx-4">
              <span class="mb-4">Cuando piensas leer <b>{{ book.title }}</b>.</span>
            </div>
          </div>
        </details>
        <details v-else class="flex flex-col items-center justify-center w-full">
          <summary
            v-bind:class="{ 'mb-4 p-2 border border-orange-300 hover:border-gray-500 cursor-pointer w-2/4 m-auto bg-gray-900': true }">
            No hay libros pendientes
          </summary>
        </details>
        <!-- Fin details pendientes -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const bookName = ref('');
  
  const saveBook = (list) => {
    const newBook = { title: bookName.value };
    // Agrega el nuevo libro a la lista correspondiente
    if (list === 'readedBooks') {
      readedBooks.value.push(newBook);
    } else if (list === 'pendantBooks') {
      pendantBooks.value.push(newBook);
    }
    // Limpia el input después de guardar el libro
    bookName.value = '';
  };
  
  const readedBooks = ref([]);
  const pendantBooks = ref([]);
  </script>
  