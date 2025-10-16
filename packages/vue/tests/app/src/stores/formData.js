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
});
