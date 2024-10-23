<template>
    <section class="border-t-4 border-green-500 bg-white rounded-lg shadow-md max-w-4xl mx-auto p-6">
      <div>
        <h3 class="m-5 text-2xl font-bold text-black text-center">Napíšte nám</h3>
        <p class="m-5 text-gray-600 text-center">
          Vyplňte kontaktný formulár, prípadne nás kontaktujte priamo cez e-mail alebo telefonicky.
        </p>
      </div>
  
      <div>
        <form @submit.prevent="odoslatFormular">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="meno" class="mb-2 text-gray-700">Meno:</label>
              <input
                class="leading-5 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                type="text"
                id="meno"
                v-model="meno"
                required
              />
            </div>
            <div class="flex flex-col">
              <label for="priezvisko" class="mb-2 text-gray-700">Priezvisko:</label>
              <input
                class="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                type="text"
                id="priezvisko"
                v-model="priezvisko"
                required
              />
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="flex flex-col">
              <label for="email" class="mb-2 text-gray-700">Email:</label>
              <input
                class="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                type="email"
                id="email"
                v-model="email"
                required
              />
            </div>
            <div class="flex flex-col">
              <label for="telefon" class="mb-2 text-gray-700">Telefón:</label>
              <input
                class="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                type="tel"
                id="telefon"
                v-model="telefon"
                required
              />
            </div>
          </div>
  
          <div class="flex flex-col mt-4">
            <label for="sprava" class="mb-2 text-gray-700">Správa:</label>
            <textarea
              id="sprava"
              class="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 h-32 resize-none"
              v-model="sprava"
              required
            ></textarea>
          </div>
  
          <div class="flex items-start mt-4">
            <input
              type="checkbox"
              id="suhlas"
              v-model="suhlas"
              class="mr-2 mt-1"
              required
            />
            <label for="suhlas" class="text-gray-700">
              Potvrdzujem, že som sa oboznámil s poučením o spracovaní osobných údajov.
              <a href="#" class="text-green-500 hover:underline">Zobraziť celé znenie.</a>
            </label>
          </div>
  
          <button
            type="submit"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 mt-6 rounded-md w-full"
          >
            Odoslať formulár
          </button>
  
          <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { reactive, toRefs } from "vue";
  export default {
    setup() {
      const state = reactive({
        meno: "",
        priezvisko: "",
        email: "",
        telefon: "",
        sprava: "",
        suhlas: false,
        errorMessage: "",
      });
  
      const odoslatFormular = () => {
        if (!state.suhlas) {
          state.errorMessage = "Musíte súhlasiť s podmienkami.";
          return;
        }
  
        console.log("Meno:", state.meno);
        console.log("Priezvisko:", state.priezvisko);
        console.log("Email:", state.email);
        console.log("Telefon:", state.telefon);
        console.log("Správa:", state.sprava);
  
        state.errorMessage = "";
      };
  
      return {
        ...toRefs(state),
        odoslatFormular,
      };
    },
  };
  </script>
  
  <style scoped></style>
  