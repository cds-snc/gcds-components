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
    valueMissing: 'Saisissez des renseignements pour continuer.',
    typeMismatch: {
      email:
        'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
      url: 'Entrez une adresse Web en utilisant le format spécifié pour continuer.',
    },
    patternMismatch: 'Utilisez le format spécifié pour continuer.',
    tooLong:
      'Entrez {max} caractères ou moins pour continuer. Vous en avez présentement {current}.',
    tooShort:
      'Entrez au moins {min} caractères pour continuer. Vous en avez présentement {current}.',
    rangeUnderflow:
      'Entrez un nombre plus grand ou égal à {min} pour continuer.',
    rangeOverflow:
      'Entrez un nombre plus petit ou égal à {max} pour continuer.',
    stepMismatch:
      'Entrez un nombre parmi les options spécifiées pour continuer. Les nombres les plus proches de votre entrée sont {lower} et {upper}.',
    badInput: 'Entrez un nombre pour continuer.',
  },
};

export default I18N;
