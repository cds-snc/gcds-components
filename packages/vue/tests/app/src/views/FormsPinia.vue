<script setup>
import { useFormStore } from '../stores/formData.js'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const formData = storeToRefs(formStore).formData;
</script>

<template>
  <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">Form components with state</gcds-heading>

    <form>
      <section class="b-solid p-300 mb-300" id="input">
        <gcds-heading tag="h2" margin-top="0">Gcds-input</gcds-heading>
        <p>Text input and number input</p>

        <gcds-input
          type="text"
          input-id="name"
          name="name"
          label="Full name"
          v-model="formData.name"
        ></gcds-input>

        <gcds-input
          type="number"
          input-id="number"
          name="number"
          label="Number"
          v-model="formData.number"
        ></gcds-input>

        <p>
          You entered: <span id="input-name">{{ formData.name }}</span>
        </p>
        <p>
          You entered: <span id="input-number">{{ formData.number }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="textarea">
        <gcds-heading tag="h2" margin-top="0">Gcds-textarea</gcds-heading>

        <gcds-textarea
          label="Message"
          textarea-id="message"
          name="message"
          v-model="formData.message"
        ></gcds-textarea>

        <p>
          You entered: <span id="input-message">{{ formData.message }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="date-input">
        <gcds-heading tag="h2" margin-top="0">Gcds-date-input</gcds-heading>
        <p>Date input in full and compact format.</p>

        <gcds-date-input
          legend="Full date"
          name="date-full"
          format="full"
          v-model="formData.dateFull"
        ></gcds-date-input>

        <gcds-date-input
          legend="Compact date"
          name="date-compact"
          format="compact"
          v-model="formData.dateCompact"
        ></gcds-date-input>

        <div>
          <p>
            You entered: <span id="input-date-full">{{ formData.dateFull }}</span>
          </p>
          <p>
            You entered: <span id="input-date-compact">{{ formData.dateCompact }}</span>
          </p>
        </div>
      </section>

      <section class="b-solid p-300 mb-300" id="select">
        <gcds-heading tag="h2" margin-top="0">Gcds-select</gcds-heading>

        <gcds-select
          label="Select"
          select-id="select"
          name="select"
          default-value="Select an option"
          v-model="formData.select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </gcds-select>

        <p>
          You entered: <span id="input-select">{{ formData.select }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="radios">
        <gcds-heading tag="h2" margin-top="0">Gcds-radios</gcds-heading>

        <gcds-radios
          name="radio"
          legend="Radios"
          options='[
          { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
          { "label": "Label for radio 2", "id": "radio2", "value": "radio2"},
          { "label": "Label for radio 3", "id": "radio3", "value": "radio3"}
        ]'
          v-model="formData.radio"
        ></gcds-radios>

        <p>
          You entered: <span id="input-radios">{{ formData.radio }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="checkboxes">
        <gcds-heading tag="h2" margin-top="0">Gcds-checkboxes</gcds-heading>

        <gcds-checkboxes
          name="check"
          legend="Checkboxes"
          options='[
            { "label": "Label for checkbox 1", "id": "check1", "value": "check1"},
            { "label": "Label for checkbox 2", "id": "check2", "value": "check2"},
            { "label": "Label for checkbox 3", "id": "check3", "value": "check3"}
          ]'
          v-model="formData.check"
        ></gcds-checkboxes>

        <p>
          You entered: <span id="input-check">{{ formData.check.toString() }}</span>
        </p>
      </section>

      <gcds-button
        type="button"
        button-role="primary"
        id="assignAll"
        @click="formStore.assignAll()"
      >
        Assign all form fields
      </gcds-button>
      <gcds-button
        type="button"
        button-role="secondary"
        id="invalid"
        @click="formStore.assignInvalidValues()"
      >
        Assign invalid values
      </gcds-button>
      <gcds-button
        type="reset"
        button-role="danger"
        id="reset"
        @click="formStore.$reset()"
      >
        Reset
      </gcds-button>
    </form>
</template>