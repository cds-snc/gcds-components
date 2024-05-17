<script>
  import { ref } from 'vue'
  export default {
    props: {
      label: "string",
      name: "string"
    }
  };
  const message = ref('')
</script>

<template>
  <div>
    <p>This is the {{ message }}</p>
    <gcds-input @input="message" :label="label" :name="name" input-id="red"></gcds-input>
  </div>
</template>