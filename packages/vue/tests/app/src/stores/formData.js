import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      name: '',
      number: 0,
      message: '',
      select: '',
      dateFull: '',
      dateCompact: '',
      radio: '',
      check: [],
    },
  }),
  actions: {
    assignAll() {
      const assignData = {
        name: 'John Doe',
        number: 23,
        message: 'This is a message showing v-model working correctly.',
        select: '3',
        dateFull: '2024-12-25',
        dateCompact: '2024-12',
        radio: 'radio2',
        check: ['check2', 'check1'],
      };

      this.formData = { ...assignData };
    },
    assignInvalidValues() {
      const invalidData = {
        number: 'red',
        select: '5',
        dateFull: '20222-123-253',
        dateCompact: '245-12',
        radio: 'radio5',
        check: 'check5',
      };

      this.formData = { ...invalidData };
    },
  },
});
