<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ColorsVue from './components/Colors.vue';

import { ref, defineModel } from 'vue';

const hairColors = ref([
  { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
  { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
  { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
  { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
]);

const selectedColor = defineModel('selectedColor');
</script>

<template>
  <div>
    <Header />
    <main id="main" class="container-xl mx-auto xl:px-0 sm:px-500 px-300">
      <gcds-heading tag="h1">
        Vue E2E test app
      </gcds-heading>

      <gcds-text>
        Vue app to verify the <strong>@cdssnc/gcds-components-vue</strong> package and how it functions.
      </gcds-text>
      <ColorsVue />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
