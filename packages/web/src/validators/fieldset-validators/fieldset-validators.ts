import { Validator } from '../validator';

export const requiredFieldset: Validator<string> = {
  validate: (id: string) => {
    const el = document.querySelector(`[fieldset-id=${id}]`);
    const elChildren = el.children;

    const isValid = validateFieldsetElements(el, elChildren);

    return !isValid.includes(false);
  },
  errorMessage: {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  },
};

export function validateFieldsetElements(element, nodeList) {
  let isValid = [];

  for (let i = 0; i < nodeList.length; i++) {
    switch (nodeList[i].nodeName) {
      case 'GCDS-FIELDSET': {
        const validFieldsetChildren = validateFieldsetElements(
          nodeList[i],
          nodeList[i].children,
        );
        isValid = isValid.concat(validFieldsetChildren);
        break;
      }

      case 'GCDS-CHECKBOX': {
        // Checkboxes can share name property
        const inputName = nodeList[i].getAttribute('name');
        // Find all inputs with shared name
        const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
        let childGroupValid = false;

        // Check if there is more than one input with this name
        if (sameNameInputs.length > 1) {
          // Validate as group
          for (let c = 0; c < sameNameInputs.length; c++) {
            if (sameNameInputs[c].hasAttribute('checked')) {
              childGroupValid = true;
            }
          }
          isValid.push(childGroupValid);
        } else {
          // Validate as single input
          isValid.push(nodeList[i].hasAttribute('checked') ? true : false);
        }
        break;
      }
      case 'GCDS-RADIO-GROUP': {
        const inputName = nodeList[i].getAttribute('name');
        // Find all inputs with shared name
        const sameNameInputs = element.querySelector(`[name=${inputName}]`);
        const shadowInputs =
          sameNameInputs.shadowRoot.querySelectorAll('input');
        let childGroupValid = false;

        for (let r = 0; r < shadowInputs.length; r++) {
          if (shadowInputs[r].checked) {
            childGroupValid = true;
          }
        }
        isValid.push(childGroupValid);
        break;
      }

      case 'GCDS-INPUT':
      case 'GCDS-TEXTAREA':
      case 'GCDS-SELECT':
      case 'GCDS-FILE-UPLOADER':
        // Do nothing for now
        break;
    }
  }

  return isValid;
}
