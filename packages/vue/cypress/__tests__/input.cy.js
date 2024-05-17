import Input from './input.vue'

describe('gcds-input', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Input, {
      props: {
        label: 'red',
        name: 'red'
      }
    });
    cy.get('gcds-input').invoke('prop', 'label').should('contain', 'red');
    cy.get('gcds-input').shadow().find('input').invoke('prop', 'type').should('contain', 'text');
  });
})