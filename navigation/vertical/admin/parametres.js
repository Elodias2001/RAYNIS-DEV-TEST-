/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */

const parametres = [
  {
    title: "Paramètres",
    icon: { icon: "tabler-settings" },
    children: [
      {
        title: "Posts",
        icon: { icon: "tabler-certificate" },
        to: { name: "admins-posts" },
      },
    ],
  },
]

// Ajout des allowedFonctions pour chaque enfant
parametres[0].children = parametres[0].children.map(child => ({
  ...child,
}))

export default parametres


// const userPermissions = authStore.getPermissions

// const parametres = [
//   {
//     title: "Paramètres",
//     icon: { icon: "tabler-settings" },
//     children: [],
//     moduleId: 2,
//   },
// ]

// parametres[0].children.push({
//   title: "Société",
//   icon: { icon: "tabler-building" },
//   to: { name: "admin-societe-tab", params: { tab: "infos" } },
//   moduleId: 3,
//   allowedFonctions: userPermissions.permissions[3],
// })

// export default parametres
