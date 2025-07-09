const I18N = {
  en: {
    valueMissing: 'Enter information to continue.',
    typeMismatch: {
      email:
        'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
      url: 'Enter a URL in the specified format to continue.',
    },
    patternMismatch: 'Use the specified format to continue.',
    tooLong:
      "Enter {max} characters or less to continue. You've entered {current} characters.",
    tooShort:
      "Enter at least {min} characters to continue. You've entered {current} characters.",
    rangeUnderflow: "Enter a number that's {min} or more to continue.",
    rangeOverflow: "Enter a number that's {max} or less to continue.",
    stepMismatch:
      'Enter a number from the specified options to continue. The closest numbers to what you entered are {lower} and {upper}. ',
    badInput: 'Enter a number to continue.',
  },
  fr: {
    valueMissing: 'Enter information to continue.',
    typeMismatch: {
      email:
        'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
      url: 'Veuillez entrer une adresse Web en utilisant le format spécifié pour continuer.',
    },
    patternMismatch: 'Veuillez utiliser le format spécifié pour continuer.',
    tooLong:
      'Veuillez entrer {max} caractères ou moins pour continuer. Vous en avez présentement {current}.',
    tooShort:
      'Veuillez entrer au moins {min} caractères pour continuer. Vous en avez présentement {current}.',
    rangeUnderflow:
      'Veuillez entrer un nombre plus grand ou égal à {min} pour continuer',
    rangeOverflow:
      'Veuillez entrer un nombre plus petit ou égal à {max} pour continuer',
    stepMismatch:
      'Veuillez entrer un nombre parmi les options spécifiées pour continuer. Les nombres les plus proches de votre entrée sont {lower} et {upper}.',
    badInput: 'Veuillez entrer un nombre pour continuer.',
  },
};

export default I18N;
