<script setup>
  const selectedColor = defineModel()

  const colors = {
    red: { id: 1, descriptionEnglish: 'red', descriptionFrench: 'rouge' },
    blue: { id: 2, descriptionEnglish: 'blue', descriptionFrench: 'bleu' },
    yellow: { id: 3, descriptionEnglish: 'yellow', descriptionFrench: 'jaune' },
    green: { id: 4, descriptionEnglish: 'green', descriptionFrench: 'vert' },
  };
</script>

<template>
  <gcds-heading tag="h2">
    V-model
  </gcds-heading>
  <gcds-text>
    You selected: <span id="selectedColor">{{ selectedColor }}</span>
  </gcds-text>
  <gcds-grid columns-desktop="1fr 1fr">
    <div>
      <gcds-heading tag="h3">
        HTML Elements
      </gcds-heading>
      <label for="colorhtml">Select a color (HTML w/ change event)</label>
      <select
        id="colorhtml"
        class="d-block"
        @change="selectedColor = $event.target.value"
        :value="selectedColor"
      >
        <option value="red">red | rouge</option>
        <option value="blue">blue | bleu</option>
        <option value="yellow">yellow | jaune</option>
        <option value="green">green | vert</option>
      </select>
      <div class="mt-400">
        <label for="color">Select a color (v-model)</label>
        <select
          v-model="selectedColor"
          id="color"
          class="d-block"
        >
          <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
        </select>
      </div>
    </div>
    <div>
      <gcds-heading tag="h3">
        GC Design System Elements
      </gcds-heading>
      <gcds-select
        id="gcds-event"
        select-id="color-selector-event"
        label="Select a color (change event)"
        @change="selectedColor = $event.target.value;"
        :value="selectedColor"
      >
        <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
      </gcds-select>
      <!--  Some differences visually when selected is not set on any of the options. We can replicate this by setting the default-value to a space -->
      <gcds-select
        id="gcds-v-model"
        select-id="color-selector-v-model"
        label="Select a color (v-model)"
        v-model="selectedColor"
      >
        <option v-for="(color, index) in colors" :key="color.id" :value="index">{{ color.descriptionEnglish }} | {{ color.descriptionFrench }}</option>
      </gcds-select>
    </div>
  </gcds-grid>
</template>

