<script setup>
function handleChange(event) {
  const inputFiles = event.target.files;
  document.getElementById('files').innerText = Array.from(inputFiles).map(file => file.name).join(', ');
}
</script>

<template>
  <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">File Uploader Test</gcds-heading>

    <form novalidate>
      <section class="b-solid p-300 mb-300" id="file-uploader">
        <gcds-heading tag="h2" margin-top="0">Gcds-file-uploader</gcds-heading>
        <p>Testing whether the file-uploader still functions properly in Vue.</p>

        <gcds-file-uploader
          name="file-uploader"
          label="Upload your files"
          hint="You can upload multiple files."
          multiple
          @change="handleChange"
        ></gcds-file-uploader>

        <p>
          You entered: <span id="files">{{ files }}</span>
        </p>
      </section>
    </form>
</template>