import { Validator } from "../validator";

export const requiredFieldset: Validator<string> = {
    validate: (id: string) => {
        const el = document.querySelector(`gcds-fieldset[fieldset-id=${id}]`);
        const elChildren = el.children;

        let isValid = validateFieldsetElements(el, elChildren);

        return !isValid.includes(false);
    },
    errorMessage: { "en": "Please complete the required field to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}

export function validateFieldsetElements(element, nodeList) {
    let isValid = [];

    for (var i = 0; i < nodeList.length; i++) {
        switch(nodeList[i].nodeName) {
            case('GCDS-FIELDSET'):
                let validFieldsetChildren = validateFieldsetElements(nodeList[i], nodeList[i].children);
                for (var fc = 0; fc < validFieldsetChildren.length; fc++) {
                    isValid.push(validFieldsetChildren[fc]);
                }
                break;
            case('GCDS-CHECKBOX'):
            case('GCDS-RADIO'):

                // Radio/checkbox can share name property
                let inputName = nodeList[i].getAttribute('name');
                // Find all inputs with shared name
                const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
                let childGroupValid = false;

                // Check if there is more than one input with this name
                if (sameNameInputs.length > 1) {
                    // Validate as group
                    for (var c = 0; c < sameNameInputs.length; c++) {
                        if (sameNameInputs[c].hasAttribute("checked")) {
                            childGroupValid = true;
                        }
                    }
                    if (childGroupValid) {
                        isValid.push(true);
                    } else {
                        isValid.push(false);
                    }
                } else {
                    // Validate as single input
                    if (nodeList[i].hasAttribute('checked')) {
                        isValid.push(true);
                    } else {
                        isValid.push(false);
                    }
                }
                break;
            case('GCDS-INPUT'):
            case('GCDS-TEXTAREA'):
            case('GCDS-SELECT'):
            case('GCDS-FILE-UPLOADER'):
                // Do nothing for now
                break;
        }
    }

    return isValid;
}