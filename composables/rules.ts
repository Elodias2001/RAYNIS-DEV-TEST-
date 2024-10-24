import { object, string } from 'yup';

// export const useFormRules = () => {
// 	return {
// 		ruleRequired: (v: any) => !!v || "Required",
// 		ruleEmail: (value: any) => {
// 			const pattern =
// 				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 			return pattern.test(value) || "Entrez une addresse email valide";
// 		},
// 		rulePassLen: (v: string) => (!!v && v.length >= 8) || "Le mot de passe doit contenir au moins 8 caractères",
// 	};
// };

// composables/rules.ts

export const LoginSchema = object({
  email: string()
    .email('Adresse email invalide')
    .required('Email est requis')
    .label('Email')
    .matches(/[\w.%+-]+@[A-Z\d-].{2,}[A-Z]{2}/gi, {
      message: 'Adresse email invalide',
    }),
  password: string().required('Mot de passe est requis').label('Password').min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
})

export const ruleEmail = (v: string) => /.+@.+\..+/.test(v) || 'Adresse email invalide';
export const ruleRequired = (v: string) => !!v || 'Ce champ est requis';
export const rulePassLen = (v: string) => (v && v.length >= 8) || 'Le mot de passe doit contenir au moins 8 caractères';
export const ruleFile = (v: File) => {
  console.log(v)
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']; // Ajoutez les types de fichiers autorisés ici
  if (!v) {
    return 'Le fichier doit être valide et avoir une taille non nulle';
  }
  if (v.size === 0) {
    return 'Le fichier doit avoir une taille non nulle';
  }
  if (v.size >= 1000000) { // 1 MB en octets
    return 'La taille de votre fichier doit être inférieure à 1 MB!';
  }
  if (!allowedTypes.includes(v.type)) {
    return 'Ce type de fichier n\'est pas autorisé. Seuls les fichiers JPEG, JPG, PNG et GIF sont acceptés.';
  }
  return true;
};
