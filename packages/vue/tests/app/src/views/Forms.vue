<script setup>
const name = defineModel('name')
const number = defineModel('number', { default: 0, type: Number })
const message = defineModel('message')
const dateFull = defineModel('dateFull')
const dateCompact = defineModel('dateCompact')
const select = defineModel('select')
const radio = defineModel('radio')
const check = defineModel('check', { default: () => [] , type: Array })

function assignAll() {
  name.value = 'John Doe'
  number.value = 23
  message.value = 'This is a message showing v-model working correctly.'
  dateFull.value = '2024-12-25'
  dateCompact.value = '2024-12'
  select.value = '3'
  radio.value = 'radio2'
  check.value = ['check2', 'check1']
}

function assignInvalidValues() {
  number.value = 'red'
  dateFull.value = '20sd-12s-25s'
  dateCompact.value = '2e4-12'
  select.value = '5'
  radio.value = 'radio5'
  check.value = 'check5'
}

function reset() {
  name.value = ''
  number.value = 0
  message.value = ''
  dateFull.value = ''
  dateCompact.value = ''
  select.value = ''
  radio.value = ''
  check.value = []
}
</script>

<template>
  <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">Form components</gcds-heading>

    <form>
      <section class="b-solid p-300 mb-300" id="input">
        <gcds-heading tag="h2" margin-top="0">Gcds-input</gcds-heading>
        <p>Text input and number input</p>

        <gcds-input
          type="text"
          input-id="name"
          name="name"
          label="Full name"
          v-model="name"
        ></gcds-input>

        <gcds-input
          type="number"
          input-id="number"
          name="number"
          label="Number"
          v-model="number"
        ></gcds-input>

        <p>
          You entered: <span id="input-name">{{ name }}</span>
        </p>
        <p>
          You entered: <span id="input-number">{{ number }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="textarea">
        <gcds-heading tag="h2" margin-top="0">Gcds-textarea</gcds-heading>

        <gcds-textarea
          label="Message"
          textarea-id="message"
          name="message"
          v-model="message"
        ></gcds-textarea>

        <p>
          You entered: <span id="input-message">{{ message }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="date-input">
        <gcds-heading tag="h2" margin-top="0">Gcds-date-input</gcds-heading>
        <p>Date input in full and compact format.</p>

        <gcds-date-input
          legend="Full date"
          name="date-full"
          format="full"
          v-model="dateFull"
        ></gcds-date-input>

        <gcds-date-input
          legend="Compact date"
          name="date-compact"
          format="compact"
          v-model="dateCompact"
        ></gcds-date-input>

        <div>
          <p>
            You entered: <span id="input-date-full">{{ dateFull }}</span>
          </p>
          <p>
            You entered: <span id="input-date-compact">{{ dateCompact }}</span>
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
          v-model="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </gcds-select>

        <p>
          You entered: <span id="input-select">{{ select }}</span>
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
          v-model="radio"
        ></gcds-radios>

        <p>
          You entered: <span id="input-radios">{{ radio }}</span>
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
          v-model="check"
        ></gcds-checkboxes>

        <p>
          You entered: <span id="input-check">{{ check.toString() }}</span>
        </p>
      </section>

      <gcds-button
        type="button"
        button-role="primary"
        id="assignAll"
        @click="assignAll()"
      >
        Assign all form fields
      </gcds-button>
      <gcds-button
        type="button"
        button-role="secondary"
        id="invalid"
        @click="assignInvalidValues()"
      >
        Assign invalid values
      </gcds-button>
      <gcds-button
        type="reset"
        button-role="danger"
        id="reset"
        @click="reset()"
      >
        Reset
      </gcds-button>
    </form>
</template>