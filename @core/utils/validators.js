import { isEmpty, isEmptyArray, isNullOrUndefined } from "./helpers"

export const phoneNumberValidator2 = (value, maxLength) => {

  console.log('Taille Maxi NumberPhone', maxLength)

  // Si la valeur est vide ou null, retourner true (pas d'erreur)
  if (isEmpty(value)) return true

  // Convertir la valeur en chaîne de caractères pour éviter les erreurs
  const cleanedValue = String(value).trim()

  // Expression régulière pour valider les numéros de téléphone (chiffres uniquement)
  const phoneRegex = /^\d+$/

  if (!phoneRegex.test(cleanedValue)) {
    return "Le numéro de téléphone n'est pas valide."
  }

  const length = cleanedValue.replace(/\D/g, '').length // Compter uniquement les chiffres

  return (
    length === maxLength ||
    `Le numéro de téléphone doit être de ${maxLength} caractères`
  )
}

//MOI MEME
export const phoneNumberValidator = (value, minLength = 8, maxLength = 13) => {
  // Si la valeur est vide ou null, retourner true (pas d'erreur)
  if (isEmpty(value)) return true

  // Convertir la valeur en chaîne de caractères pour éviter les erreurs
  const cleanedValue = String(value).trim()

  // Expression régulière pour valider les numéros de téléphone (chiffres uniquement)
  const phoneRegex = /^\d+$/

  if (!phoneRegex.test(cleanedValue)) {
    return "Le numéro de téléphone n'est pas valide."
  }

  const length = cleanedValue.replace(/\D/g, '').length // Compter uniquement les chiffres

  if (length < minLength) {
    return `Le numéro de téléphone doit contenir au moins ${minLength} chiffres.`
  } else if (length > maxLength) {
    return `Le numéro de téléphone doit contenir au maximum ${maxLength} chiffres.`
  }

  return true // Validation réussie
}


// MOI MEME
// 👉 Required Validator
export const requiredValidator = value => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return "This field is required"

  return !!String(value).trim().length || "This field is required"
}

// 👉 Email Validator
export const emailValidator = value => {
  if (isEmpty(value)) return true

  const re =
    /^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i

  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || "The Email field must be a valid email"

  return re.test(String(value)) || "The Email field must be a valid email"
}

// 👉 Password Validator
export const passwordValidator = password => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
  const validPassword = regExp.test(password)

  return (
    validPassword ||
    "Le champ doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre, avec un minimum de 8 caractères."
  )
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value, target) =>
  value === target || "La confirmation du mot de passe ne correspond pas"

// 👉 Between Validator
export const betweenValidator = (value, min, max) => {
  const valueAsNumber = Number(value)

  return (
    (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) ||
    `Veuillez entrer un nombre entre ${min} et ${max}`
  )
}

// 👉 Integer Validator
export const integerValidator = value => {
  if (isEmpty(value)) return true
  if (Array.isArray(value))
    return value.every(val => /^-?\d+$/.test(String(val))) || "Ce champ doit être un nombre entier"

  return /^-?\d+$/.test(String(value)) || "Ce champ doit être un nombre entier"
}



// export const integerValidatorMarge = (value, minDigits = 8, maxDigits = 13) => {
//   if (isEmpty(value)) return true

//   const isInteger = val => /^-?\d+$/.test(String(val))
//   const isWithinRange = val => val.length >= minDigits && val.length <= maxDigits

//   if (Array.isArray(value)) {
//     return value.every(val => isInteger(val) && isWithinRange(String(val)))
//       || `Ce champ doit être un nombre entier entre ${minDigits} et ${maxDigits} chiffres.`
//   }

//   return (isInteger(value) && isWithinRange(String(value)))
//     || `Ce champ doit être un nombre entier entre ${minDigits} et ${maxDigits} chiffres.`
// }


// 👉 Regex Validator
export const regexValidator = (value, regex) => {
  if (isEmpty(value)) return true
  let regeX = regex
  if (typeof regeX === "string") regeX = new RegExp(regeX)
  if (Array.isArray(value)) return value.every(val => regexValidator(val, regeX))

  return regeX.test(String(value)) || "The Regex field format is invalid"
}

// 👉 Alpha Validator
export const alphaValidator = value => {
  if (isEmpty(value)) return true

  return (
    /^[A-Z]*$/i.test(String(value)) || "The Alpha field may only contain alphabetic characters"
  )
}

// 👉 URL Validator
export const urlValidator = value => {
  if (isEmpty(value)) return true
  const re = /^https?:\/\/[^\s$.?#].\S*$/

  return re.test(String(value)) || "Cette URL n'est pas valide"
}

// 👉 Length Validator
export const lengthValidator = (value, length) => {
  if (isEmpty(value)) return true

  return (
    String(value).length === length ||
    `La longueur du champ doit être de ${length} caractères`
  )
}

export const rccmValidator = value => {
  if (isEmpty(value)) return true
  const valueAsString = String(value)

  // Modifiez l'expression régulière pour inclure les espaces et les barres obliques
  return /^[\w\s/-]*$/.test(valueAsString) || "Certains caractères ne sont pas valides"
}


// export const lengthValidatorMarge = (value, minLength = 8, maxLength = 13) => {
//   if (!value) return true // Permet de gérer les valeurs vides

//   const length = value.length
  
//   if (length < minLength) {
//     return `Ce champ doit contenir au moins ${minLength} caractères.`
//   } else if (length > maxLength) {
//     return `Ce champ doit contenir au maximum ${maxLength} caractères.`
//   }

//   return true // Validation réussie
// }


// 👉 Alpha-dash Validator
export const alphaDashValidator = value => {
  if (isEmpty(value)) return true
  const valueAsString = String(value)

  return /^[\w-]*$/.test(valueAsString) || "Certains caractères ne sont pas valides"
}
